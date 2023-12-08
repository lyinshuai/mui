import React from 'react';
import { Carousel } from '@arco-design/web-react';
import styles from './style/index.module.less';
import banner2 from '../../assets/banner/img-sinoclick.png';

const bubbleList = [
  {
    src: 'https://s2.meetsocial.cn/CM_1636712858448477.png',
    style: { left: '0vw', top: '18vw', animationDuration: '1.6s' },
  },
  {
    src: 'https://s2.meetsocial.cn/CM_1636712798173902.png',
    style: { left: '40vw', top: '3vw', animationDuration: '1.2s' },
  },
  {
    src: 'https://s2.meetsocial.cn/CM_1636712845779233.png',
    style: { left: '44vw', top: '15vw', animationDuration: '1.4s' },
  },
];

export default function Right() {
  return (
    <div className={styles['banner-content-right']}>
      {/* 电脑 */}
      <img
        className={styles.computer}
        src="https://s3.meetsocial.cn/mdesign/assets/banner/bg.png"
      />
      {/* 气泡 */}
      {bubbleList.map((e, i) => (
        <div className={styles.bubble} key={i} style={e.style}>
          <img src={e.src} alt="" />
        </div>
      ))}
      {/* 轮播 */}
      <Carousel
        className={styles.carousel}
        autoPlay={{
          interval: 5000,
          hoverToPause: true,
        }}
        indicatorType="line"
        showArrow="never"
      >
        {['https://s3.meetsocial.cn/mdesign/assets/banner/img-cb.png', banner2].map(
          (src, index) => (
            <div key={index}>
              <img src={src} alt="banner" />
            </div>
          ),
        )}
      </Carousel>
    </div>
  );
}
