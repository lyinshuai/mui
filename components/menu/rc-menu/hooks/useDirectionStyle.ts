// @ts-nocheck
import * as React from 'react';
import { MenuContext } from '../context/MenuContext';

export default function useDirectionStyle(level: number): React.CSSProperties {
  const { mode, rtl, inlineIndent } = React.useContext(MenuContext);
  if (mode !== 'inline') {
    return null;
  }

  const len = level;
  const inlineIndentPlus = 18 * (level - 1);
  const inlineIndentValue =  level * inlineIndent + inlineIndentPlus;

  return rtl
    ? { paddingRight: inlineIndentValue }
    : { paddingLeft: inlineIndentValue };
}
