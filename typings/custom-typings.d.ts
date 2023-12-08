// https://github.com/facebook/create-react-app/blob/f09d3d3a52c1b938cecc977c2bbc0942ea0a7e70/packages/react-scripts/lib/react-app.d.ts#L42-L49
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default ReactComponent;
}

declare module 'bisheng/collect';

declare module 'bisheng/router';

declare module 'react-github-button';

declare module 'jsonml.js/*';

declare module 'rc-pagination/*';

declare module 'rc-util*';

declare module 'rc-checkbox';

declare module 'rc-rate';

declare module 'rc-switch';

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module '@docsearch/react/style/modal';

declare module '@docsearch/react/modal' {
  import { DocSearchModal as value } from '@docsearch/react';
  export const DocSearchModal = value;
}

declare module 'docsearch.js';

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
