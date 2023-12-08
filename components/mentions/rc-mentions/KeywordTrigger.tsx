// @ts-nocheck

import Trigger from 'rc-trigger';
import * as React from 'react';
import DropdownMenu from './DropdownMenu';
import type { OptionProps } from './Option';

import type { Direction, Placement } from './Mentions';

let BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 0],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [0, 0],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -0],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [0, -0],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
};

interface KeywordTriggerProps {
  loading?: boolean;
  options: OptionProps[];
  prefixCls?: string;
  placement?: Placement;
  direction?: Direction;
  visible?: boolean;
  transitionName?: string;
  children?: React.ReactElement;
  getPopupContainer?: () => HTMLElement;
  dropdownClassName?: string;
}

class KeywordTrigger extends React.Component<KeywordTriggerProps, {}> {
  public getDropdownPrefix = () => `${this.props.prefixCls}-dropdown`;

  public getDropdownElement = () => {
    const { options } = this.props;
    return (
      <DropdownMenu prefixCls={this.getDropdownPrefix()} options={options} />
    );
  };

  public getDropDownPlacement = () => {
    const { placement, direction } = this.props;

    let popupPlacement = 'topRight';
    if (direction === 'rtl') {
      popupPlacement = placement === 'top' ? 'topLeft' : 'bottomLeft';
    } else {
      popupPlacement = placement === 'top' ? 'topRight' : 'bottomRight';
    }
    return popupPlacement;
  };

  public render() {
    const { children, visible, transitionName, getPopupContainer, dropdownClassName, popupStyle, rows } = this.props;

    const popupElement = this.getDropdownElement();

    if (rows === 1) {
      BUILT_IN_PLACEMENTS.bottomRight['offset'] = [0, 10];
      BUILT_IN_PLACEMENTS.bottomLeft['offset'] = [0, 10];
      BUILT_IN_PLACEMENTS.topRight['offset'] = [0, -10];
      BUILT_IN_PLACEMENTS.topLeft['offset'] = [0, 10];
    } else {
      BUILT_IN_PLACEMENTS.bottomRight['offset'] = [0, 0];
      BUILT_IN_PLACEMENTS.bottomLeft['offset'] = [0, 0];
      BUILT_IN_PLACEMENTS.topRight['offset'] = [0, 0];
      BUILT_IN_PLACEMENTS.topLeft['offset'] = [0, 0];
    }

    return (
      <Trigger
        prefixCls={this.getDropdownPrefix()}
        popupVisible={visible}
        popup={popupElement}
        popupPlacement={this.getDropDownPlacement()}
        popupTransitionName={transitionName}
        builtinPlacements={BUILT_IN_PLACEMENTS}
        getPopupContainer={getPopupContainer}
        popupClassName={dropdownClassName}
        popupStyle={popupStyle}
      >
        {children}
      </Trigger>
    );
  }
}

export default KeywordTrigger;
