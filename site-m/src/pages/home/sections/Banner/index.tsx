import React from 'react';
// import useIsMobile from '../../utils/useIsMobile';
// import Content from './content';
// import Images from './images';
import Products from './products';
// import ImagesForMobile from './imagesForMobile';

import { Carousel } from '@arco-design/web-react';
import styles from './style/index.module.less';
import Left from './left';
import Right from './right';

export default function Banner() {
  // const isMobile = useIsMobile();

  return (
    <div className={styles['banner-wrapper']}>
      <div className={styles['banner-content']}>
        <Left />
        <Right />
        {/* {isMobile && <ImagesForMobile />}
          {!isMobile && <Images />} */}
      </div>
      <div className={styles['banner-footer']}>
        <Products />
      </div>
    </div>
  );
}
