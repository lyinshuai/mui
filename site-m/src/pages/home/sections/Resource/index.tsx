// 资源汇集的板块
import React from 'react';
import { Space } from '@arco-design/web-react';
import Section from '../../components/Section';
import ResourceCard from './components/Card';
// import LogoFigmaBlue from '../../assets/logo_Figma_blue.svg';
import LogoSketch from '../../assets/logo_Sketch.svg';
import LogoAxure from '../../assets/logo_Axure.svg';
import LogoUx from '../../assets/logo_Ux.svg';
// import LogoIconBoxBlue from '../../assets/logo_IconBox_blue.svg';
// import LogoArcoProBlue from '../../assets/logo_ArcoPro_blue.svg';
import LogoGitHubWhite from '../../assets/logo_Github_white.svg';
import LogoArcoCliWhite from '../../assets/logo_ArcoCli_white.svg';
import LogoArcoWebpackPluginWhite from '../../assets/logo_ArcoWebpackPlugin_white.svg';
import LogoReact from '../../assets/logo_react.svg';
import LogoVue from '../../assets/logo_vue.svg';
import {
  linkDocsArcoComponent,
  linkDocsComponentUsage,
  linkDesignerDocs,
  linkDocsDesignPrinciples,
  linkFigmaArcoComponent,
  linkFigmaArcoPro,
  linkFigmaArcoIcons,
  linkDocksArcoVueComponent,
  linkGithubCodeRepository,
  linkGithubRepositoryArcoWebpackPlugin,
  linkGithubRepositoryArcoCli,
  linkDocsDesignStyleGuideline,
  linkSketchResource,
  linkAxureResource,
} from '../../constant/links';
import DesignValues from './components/DesignValues';
import useLocale from '../../hooks/useLocale';
import useIsMobile from '../../utils/useIsMobile';

export default function SectionResource() {
  const locale = useLocale();
  const isMobile = useIsMobile();
  return (
    <Section
      headerProps={{
        title: locale['resource.title'],
        subTitle: locale['resource.subTitle'],
      }}
    >
      <Space size={20} direction={isMobile ? 'vertical' : 'horizontal'}>
        <ResourceCard
          title={locale['resource.design.title']}
          description={locale['resource.design.desc']}
          href={linkDesignerDocs}
          bodyStyle={{ marginTop: 58 }}
          // TODO: 点击的href没改
          bodyResourceList={[
            {
              name: locale['resource.design.axure'],
              logo: <LogoAxure />,
              href: linkAxureResource,
            },
            {
              name: locale['resource.design.ux'],
              logo: <LogoUx />,
              href: linkFigmaArcoPro,
            },
            {
              name: locale['resource.design.sketch'],
              logo: <LogoSketch />,
              href: linkSketchResource,
            },
            // {
            //   name: locale['resource.design.iconBox'],
            //   logo: <LogoIconBoxBlue />,
            //   href: linkFigmaArcoIcons,
            // },
            // {
            //   name: locale['resource.design.arcoComponent'],
            //   logo: <LogoFigmaBlue />,
            //   href: linkFigmaArcoComponent,
            // },
          ]}
          footerResourceList={[
            {
              // name: locale['resource.design.designPrinciples'],
              name: '设计指南',
              href: linkDesignerDocs,
            },
            // {
            //   name: locale['resource.design.styleGuide'],
            //   href: linkDocsDesignStyleGuideline,
            // },
            {
              name: locale['resource.design.arcoComponentUsage'],
              href: linkDocsComponentUsage,
            },
          ]}
        />
        <ResourceCard
          type="dark"
          title={locale['resource.develop.title']}
          description={locale['resource.develop.desc']}
          href={linkDocsArcoComponent}
          bodyStyle={{ marginTop: 58 }}
          bodyResourceList={[
            {
              name: locale['resource.develop.arcoCli'],
              logo: <LogoArcoCliWhite />,
              href: linkGithubCodeRepository,
              // href: linkGithubRepositoryArcoCli,
            },
            {
              name: 'M Webpack Plugin',
              logo: <LogoArcoWebpackPluginWhite />,
              href: linkGithubCodeRepository,
              // href: linkGithubRepositoryArcoWebpackPlugin,
            },
            {
              name: locale['resource.develop.github'],
              logo: <LogoGitHubWhite />,
              href: linkGithubCodeRepository,
            },
          ]}
          footerResourceList={[
            {
              name: 'React.js',
              logo: <LogoReact />,
              href: linkDocsArcoComponent,
            },
          ]}
        />
      </Space>
      <DesignValues style={{ marginTop: 20 }} />
    </Section>
  );
}
