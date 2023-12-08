import React, { useEffect } from 'react';
import cs from '../../utils/classNames';
import styles from './style/index.module.less';
import StartBtn from '../../components/StartBtn';

const transitionTime = 0.4;
const slogansDelayTime = 3;
let oldSlogan = 0;
let currentSlogan = -1;

const bigTxtStyle = { fontSize: '4.5vw', lineHeight: '3.5vw', transform: 'scale(1, 1)' };
const txt1Arr = [
  { txt: ['SIMPLICITY', 'IS NOT', 'EASY'], style: bigTxtStyle },
  { txt: ['POPULAR', 'MORE', 'FLUENT'], style: bigTxtStyle },
  { txt: ['UNIFIED', 'BUT NOT', 'SINGLE'], style: bigTxtStyle },
  {
    txt: ['SYSTEM', 'PURSUIT OF', 'EXPERIENCE'],
    style: bigTxtStyle,
  },
];
const txt2Arr = ['简约 而非简单', '流行 更要流畅', '统一 但不单一', '体系 追求体验'];

export default function Left() {
  useEffect(() => {
    animateInit();
  }, []);

  const addScript = url => {
    return new Promise((resolve, reject) => {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', url);
      document.body.appendChild(script);
      script.onload = function () {
        resolve(true);
      };
    });
  };

  const animateInit = async () => {
    // 引入TweenMax.min.js;
    await addScript('https://s2.meetsocial.cn/CM_1636715699906920.js');
    switchSlogan();
    // switchSlogan('txt2');
  };
  // 切换文本
  const switchSlogan = () => {
    const totalSlogans = 4;
    oldSlogan = currentSlogan;

    if (currentSlogan < totalSlogans - 1) {
      currentSlogan++;
    } else {
      currentSlogan = 0;
    }
    if (oldSlogan === -1) {
      oldSlogan = totalSlogans - 1;
    }
    animateOnce(1);
    animateOnce(2);
    TweenLite.delayedCall(slogansDelayTime, () => switchSlogan());
  };

  const animateOnce = i => {
    let _arr = document.querySelectorAll(`.txt${i}`);
    TweenLite.to(_arr[oldSlogan], transitionTime, { top: -20, alpha: 0, rotationX: 90 });
    TweenLite.fromTo(
      _arr[currentSlogan],
      transitionTime,
      { top: 20, alpha: 0, rotationX: -90 },
      { top: 0, alpha: 1, rotationX: 0 },
    );
  };

  return (
    <div className={styles['banner-content-left']}>
      <div className={cs(styles['txt-small'], styles['code-color'])}>{'<a href='}</div>
      <div className={styles['txt1-area']}>
        {txt1Arr.map(e => (
          <div className={cs(styles['pos-abs'], 'txt1')}>
            {e.txt.map(m => (
              <div className={styles['txt-big']} style={e.style}>
                {m}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles['txt-small']}>
        <span className={styles['code-color']}>{'>'}</span>
        <div className={styles['txt2-area']}>
          {txt2Arr.map(e => (
            <span className={cs(styles['pos-abs'], 'txt2')}>{e}</span>
          ))}
        </div>
        <span className={styles['code-color']}>{'</a>'}</span>
      </div>
      <StartBtn className={styles['start-btn']} />
    </div>
  );
}
