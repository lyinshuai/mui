import * as React from 'react';
import Icon from '@ant-design/icons';
import classnames from 'classnames';
import type { IconComponentProps } from '@ant-design/icons/lib/components/icon';
import { globalConfig } from '../config-provider';
// import EditOutlinedSvg from './svg/edit-outlined.svg';

const EditOutlinedSvg = () => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <path
      d="M13.7 12.975a.3.3 0 01.3.3v.6a.3.3 0 01-.3.3H2.3a.3.3 0 01-.3-.3v-.6a.3.3 0 01.3-.3h11.4zM9.46 2.14l.04.036 2.06 2.071a.6.6 0 01-.001.847l-.222.222.004.004-6.454 6.454H2.6a.6.6 0 01-.598-.556L2 11.175V8.886l6.233-6.282-.005-.005.423-.423a.6.6 0 01.81-.035zM7.33 5.202l-4.11 4.19v.002l1.161 1.161h.002L8.53 6.403l-1.201-1.2zM9.06 3.436l-.892.91 1.21 1.208.896-.897-1.214-1.22z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const EditOutlined: React.FC<IconComponentProps> = ({ className, onClick }) => {
  const { getIconPrefixCls } = globalConfig();
  const iconPrefixCls = getIconPrefixCls();

  return (
    <Icon
      className={classnames(className, `${iconPrefixCls}-edit`)}
      component={EditOutlinedSvg}
      onClick={onClick}
    />
  );
};

EditOutlined.displayName = 'EditOutlined';

export default EditOutlined;
