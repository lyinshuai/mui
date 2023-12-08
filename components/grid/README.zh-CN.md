`````
组件 / 布局

# 栅格 Grid

栅格可以有效的保证页面的一致性、逻辑性、加强团队协作和统一。
`````

%%Content%%

## API


Ant Design 的布局组件若不能满足你的需求，你也可以直接使用社区的优秀布局组件：

- [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
- [react-blocks](https://github.com/whoisandy/react-blocks/)

### Row

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` | `top` |  |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array | 0 |  |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start` |  |
| wrap | 是否自动换行 | boolean | true |  |

### Col

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |  |
| order | 栅格顺序 | number | 0 |  |
| pull | 栅格向左移动格数 | number | 0 |  |
| push | 栅格向右移动格数 | number | 0 |  |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |  |
| xs | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| sm | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| md | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| lg | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xl | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xxl | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |

响应式栅格的断点扩展自 [BootStrap 4 的规则](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)（不包含链接里 `occasionally` 的部分)。

<style>
  [data-theme="dark"] #components-grid-demo-playground pre {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,.65);
  }
</style>
