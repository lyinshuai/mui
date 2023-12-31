`````
Material Market

# Docgen

Learn how to automatically generate material API documentation.
`````

*Auto translate by google.*

*This article is based on the project created by Arco's official material template*

## Directory Structure

The material document contains two aspects: component Props parameters and sample code. Through arco-scripts, a complete material document can be automatically generated. First, the material `/src` directory structure is as follows:

```
─ /src
  ├── __test__
  ├── TEMPLATE.md
  ├── demo
  │ └── basic.jsx
  ├── index.tsx
  └── style
```

You need to pay attention to `TEMPLATE.md` and `demo`. In projects using TypeScript, arco-scripts can quickly generate component interface documentation by extracting the content of comments. `TEMPLATE.md` is a template generated by the document. Its contents are as follows:

```markdown
---
file: index
---

# TooltipButton

## Properties/Props

%%Props%%

## Demos

%%Demos%%
```

Among them, `%%Props%%` will be filled with the `Props` parameters of the component after the `docgen` command, and `%%Demos%%` will be filled with the Demo code in `/src/demo`. The final generated document is as follows:

```markdown
# TooltipButton

## Properties/Props

### `<TooltipButton>`

| Parameter name | Description | Type | Default value |
| ------ | :--------: | :---------: | -----: |
| title | Tip of the button | `ReactNode` | `-` |

## Demos

~~~jsx
import React from'react';
import TooltipButton from'@arco-design/rc-xxx';

/**
 * Basic usage
 */
export default () => {
  return <TooltipButton title="tooltip title">Demo Basic</TooltipButton>;
};
~~~
```

## Write a comment

The `docgen` command generates documentation by parsing the comments in the TypeScript interface, so you need to write comments for the interface in the form of [TSDoc](https://tsdoc.org/).

arco-scripts starts from **1.23.0** and provides two optional low-level tools ([ts-document](https://www.npmjs.com/package/ts-document), [react-docgen -typescript](https://www.npmjs.com/package/react-docgen-typescript)) is used for TS parsing. These two tools correspond to two different annotation writing methods. You can specify the tool by modifying `.config/docgen.config.js` in the project root directory:

```javascript
// .config/docgen.config.js
module.exports = (config) => {
  ...
  // ['react-docgen-typescript'] is the default value
  config.tsParseTool = ['ts-document']
}
```

We **recommend** to use `ts-document`, which is an Arco self-developed tool with better syntax compatibility and dual language support. When you read this document, all newly created material items have used `ts-document` for API parameter extraction by default.

In the project created by the Arco official material template, you don't have to bother to deal with document generation, we will generate a new document before `npm publish` and upload it to NPM.

### Use ts-document

Write the comment in the following way, all interface or type declarations with `@title` will be extracted. The following tags are available for attribute annotations:

- Chinese description of `@zh` attribute
- English description of the `@en` attribute (optional)
- The default value of the `@default` attribute (optional)
- `@version` From which version the attribute was added (optional)

``` typescript
/**
 * @title Button (Required, only the interface or type described with `title` will be collected)
 */
interface ButtonProps {
  /**
   * @zh button size (Chinese description of the attribute)
   * @en Size of Button (optional, English description of the attribute)
   * @version 1.2.0 (optional, in which version the new attributes are supported)
   * @default'default' (optional, the default value of the attribute)
   */
  size?:'mini' |'small' |'default' |'large';

  /**
   * @zh button state
   * @en Status of Button
   */
  status?:'danger' |'error' |'success';
}
```

If you want to generate dual-language documents, you can configure `docgen.config.js` as follows:

```javascript
// .config/docgen.config.js
module.exports = (config) => {
  config.tsParseTool = ['ts-document'];
  config.languages ​​= ['zh-CN','en-US'];

  // Need to prepare TEMPLATE.zh-CN.md and TEMPLATE.en-US.md separately
  config.template ='TEMPLATE.[language].md';
  // You can also share the same template file in both Chinese and English (default value)
  // config.template ='TEMPLATE.md';

  // Will output two files README.zh-CN.md and README.en-US.md
  config.outputFileName ='README.[language].md';

}
```

### Use react-docge-typescript

Use the following method to write notes, you need to pay attention to the following aspects:

- Comments must be written in the form of TSDoc (Single-line comments in the form of // cannot be extracted)
- The components that need to be extracted must be exported in the form of `export const Component = (props: ComponentProps) => {}`, otherwise they will not be recognized by the tool;
- The default value must be written in the form of `Component.defaultProps = {}` before it can be extracted by the tool.
- If you encounter other problems, please refer to the [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript/) repository.

```typescript
interface ButtonProps {
  /**
   * Button size
   */
  size?:'mini' |'small' |'default' |'large';
  /**
   * Button state
   */
  status?:'danger' |'error' |'success';
}

// Need to declare Button as const and export, otherwise the tool may not recognize
export const Button = (props: ButtonProps) => {
  ...
};

// Only the default value declared with defaultProps can be extracted by the tool
Button.defaultProps = {
  size:'default';
};

export default Button;
```

**The react-docgen-typescript method does not support automatic generation of Chinese/English documents, and manual processing is required.**
