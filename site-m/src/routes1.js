import lazyLoad from './utils/lazyload';

const isAntd = false;
const fileName = isAntd ? 'index' : 'README';

export default function getRoutes(lang = 'zh', t) {
  const suffix = lang === 'zh-CN' ? '.zh-CN' : '.en-US';

  return [
    {
      name: t['routes.development-guide'],
      key: 'guide',
      module: 'react',
      children: [
        {
          name: t['routes.button'],
          path: 'components/button',
          component: lazyLoad(() => import(`../../components/button/${fileName}${suffix}.md`)),
        },
        {
          name: t['routes.input'],
          path: 'components/input',
          component: lazyLoad(() => import(`../../components/input/${fileName}${suffix}.md`)),
        },
      ],
    },
  ];
}
