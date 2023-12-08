// @ts-nocheck

import * as React from 'react';
import classNames from 'classnames';
import { isLeaf, toPathKey } from '../utils/commonUtil';
import CascaderContext from '../context';
import Checkbox from './Checkbox';
import type { DefaultOptionType, SingleValueType } from '../Cascader';
import { SEARCH_MARK } from '../hooks/useSearchOptions';

export const FIX_LABEL = '__cascader_fix_label__';

export interface ColumnProps {
  prefixCls: string;
  multiple?: boolean;
  options: DefaultOptionType[];
  /** Current Column opened item key */
  activeValue?: React.Key;
  /** The value path before current column */
  prevValuePath: React.Key[];
  onToggleOpen: (open: boolean) => void;
  onSelect: (valuePath: SingleValueType, leaf: boolean) => void;
  onActive: (valuePath: SingleValueType) => void;
  checkedSet: Set<React.Key>;
  halfCheckedSet: Set<React.Key>;
  loadingKeys: React.Key[];
  isSelectable: (option: DefaultOptionType) => boolean;
  style?: React.CSSProperties
}

export default function Column({
  prefixCls,
  multiple,
  options,
  activeValue,
  prevValuePath,
  onToggleOpen,
  onSelect,
  onActive,
  checkedSet,
  halfCheckedSet,
  loadingKeys,
  isSelectable,
  style
}: ColumnProps) {
  const menuPrefixCls = `${prefixCls}-menu`;
  const menuItemPrefixCls = `${prefixCls}-menu-item`;

  const {
    fieldNames,
    changeOnSelect,
    expandTrigger,
    expandIcon,
    checkedIcon,
    loadingIcon,
    dropdownMenuColumnStyle,
  } = React.useContext(CascaderContext);

  const hoverOpen = expandTrigger === 'hover';

  // ============================ Option ============================
  const optionInfoList = React.useMemo(
    () =>
      options.map(option => {
        const { disabled } = option;
        const searchOptions = option[SEARCH_MARK];
        const label = option[FIX_LABEL] ?? option[fieldNames.label];
        const value = option[fieldNames.value];

        const isMergedLeaf = isLeaf(option, fieldNames);

        // Get real value of option. Search option is different way.
        const fullPath = searchOptions
          ? searchOptions.map(opt => opt[fieldNames.value])
          : [...prevValuePath, value];
        const fullPathKey = toPathKey(fullPath);

        const isLoading = loadingKeys.includes(fullPathKey);

        // >>>>> checked
        const checked = checkedSet.has(fullPathKey);

        // >>>>> halfChecked
        const halfChecked = halfCheckedSet.has(fullPathKey);

        return {
          disabled,
          label,
          value,
          isLeaf: isMergedLeaf,
          isLoading,
          checked,
          halfChecked,
          option,
          fullPath,
          fullPathKey,
        };
      }),
    [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath],
  );

  // ============================ Render ============================
  return (
    <div className={menuPrefixCls} role="menu" style={style}>
      {optionInfoList.map(
        ({
          disabled,
          label,
          value,
          isLeaf: isMergedLeaf,
          isLoading,
          checked,
          halfChecked,
          option,
          fullPath,
          fullPathKey,
        }) => {
          // >>>>> Open
          const triggerOpenPath = () => {
            if (!disabled && (!hoverOpen || !isMergedLeaf)) {
              onActive(fullPath);
            }
          };

          // >>>>> Selection
          const triggerSelect = () => {
            if (isSelectable(option)) {
              onSelect(fullPath, isMergedLeaf);
            }
          };

          // >>>>> Title
          let title: string;
          if (typeof option.title === 'string') {
            title = option.title;
          } else if (typeof label === 'string') {
            title = label;
          }

          // >>>>> Render
          return (
            <div
              key={fullPathKey}
              className={classNames(menuItemPrefixCls, {
                [`${menuItemPrefixCls}-expand`]: !isMergedLeaf,
                [`${menuItemPrefixCls}-active`]: activeValue === value,
                [`${menuItemPrefixCls}-disabled`]: disabled,
                [`${menuItemPrefixCls}-loading`]: isLoading,
                [`${menuItemPrefixCls}-checkbox`] :multiple,
              })}
              style={dropdownMenuColumnStyle}
              role="menuitemcheckbox"
              title={title}
              aria-checked={checked}
              data-path-key={fullPathKey}
              onClick={() => {
                triggerOpenPath();
                if (!multiple || isMergedLeaf) {
                  triggerSelect();
                }
              }}
              onDoubleClick={() => {
                if (changeOnSelect) {
                  onToggleOpen(false);
                }
              }}
              onMouseEnter={() => {
                if (hoverOpen) {
                  triggerOpenPath();
                }
              }}
              onMouseDown={e => {
                // Prevent selector from blurring
                e.preventDefault();
              }}
            >
              {multiple && (
                <Checkbox
                  prefixCls={`${prefixCls}-checkbox`}
                  checked={checked}
                  halfChecked={halfChecked}
                  disabled={disabled}
                  onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                    e.stopPropagation();
                    triggerSelect();
                  }}
                />
              )}
              <div className={`${menuItemPrefixCls}-content`}>{label}</div>
              {!isLoading && expandIcon && !isMergedLeaf && (!checkedIcon || !checked) && (
                <div className={`${menuItemPrefixCls}-expand-icon`}>{expandIcon}</div>
              )}
              {!isLoading && checkedIcon && !multiple && checked && (
                <div className={`${menuItemPrefixCls}-checked-icon`}>{checkedIcon}</div>
              )}
              {isLoading && loadingIcon && (
                <div className={`${menuItemPrefixCls}-loading-icon`}>{loadingIcon}</div>
              )}
            </div>
          );
        },
      )}
    </div>
  );
}
