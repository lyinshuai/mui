import * as React from 'react';
import { ReactNode } from 'react';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { ValidateStatus } from '../../form/FormItem';
import { getFeedbackIcon } from '../../_util/statusUtils';
import CloseOutlined from '../../_assets/CloseOutlined2';
import LoadingIcon from '../../_assets/Loading';
import ClearIcon from '../../_assets/CloseCircleFilled';
import ArrowDownOutlined2 from '../../_assets/ArrowDownOutlined2';

export default function getIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  status,
  prefixCls,
  showArrow,
}: {
  suffixIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  menuItemSelectedIcon?: React.ReactNode;
  removeIcon?: React.ReactNode;
  loading?: boolean;
  multiple?: boolean;
  hasFeedback?: boolean;
  status?: ValidateStatus;
  prefixCls: string;
  showArrow?: boolean;
}) {
  // Clear Icon
  let mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = <ClearIcon />;
  }

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => (
    <>
      {showArrow !== false && arrowIcon}
      {hasFeedback && getFeedbackIcon(prefixCls, status)}
    </>
  );

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<LoadingIcon />);
  } else {
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      let iconCls = `${prefixCls}-suffix`;
      if (open && showSearch) {
        return getSuffixIconNode(<SearchOutlined className={iconCls} />);
      }
      if (open) {
        iconCls += ` ${prefixCls}-arrow-open`
      }
      return getSuffixIconNode(<ArrowDownOutlined2 className={iconCls} />);
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <CheckOutlined />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <CloseOutlined />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
