import React, { CSSProperties } from 'react';
import { Space } from '@arco-design/web-react';
import styles from './index.module.less';
import IconArco1 from '../../../../assets/arco_1.svg';
import IconArco2 from '../../../../assets/arco_2.svg';
import IconArco3 from '../../../../assets/arco_3.svg';
import IconArco4 from '../../../../assets/arco_4.svg';
import useLocale from '../../../../hooks/useLocale';
import useIsMobile from '../../../../utils/useIsMobile';

interface DesignValuesProps {
  style?: CSSProperties;
}

export default function DesignValues({ style }: DesignValuesProps) {
  const locale = useLocale();
  const isMobile = useIsMobile();
  const designValueList = [
    {
      icon: <IconArco1 />,
      title: locale['resource.designValue.title.1'],
      description: locale['resource.designValue.desc.1'],
    },
    {
      icon: <IconArco2 />,
      title: locale['resource.designValue.title.2'],
      description: locale['resource.designValue.desc.2'],
    },
    {
      icon: <IconArco3 />,
      title: locale['resource.designValue.title.3'],
      description: locale['resource.designValue.desc.3'],
    },
    {
      icon: <IconArco4 />,
      title: locale['resource.designValue.title.4'],
      description: locale['resource.designValue.desc.4'],
    },
  ];
  return (
    <div className={styles.wrapper} style={style}>
      <Space
        size={20}
        style={{ display: 'flex', justifyContent: 'space-between' }}
        direction={isMobile ? 'vertical' : 'horizontal'}
      >
        {designValueList.map(({ icon, title, description }) => (
          <Space size={20} key={title}>
            <div className={styles.icon}>{icon}</div>
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </Space>
        ))}
      </Space>
    </div>
  );
}
