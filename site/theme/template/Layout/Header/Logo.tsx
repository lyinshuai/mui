import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';
import logoSvg from '../../../static/logo-m.svg?url';

import './Logo.less';

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo = ({ isZhCN, location }: LogoProps) => (
  <h1>
    <Link to={utils.getLocalizedPathname('/', isZhCN, location.query)} id="logo">
      <img alt="logo" src={logoSvg} />
    </Link>
  </h1>
);

export default Logo;
