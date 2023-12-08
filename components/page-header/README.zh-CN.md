`````
组件 / 导航

# 页头 PageHeader

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题等内容

`````

%%Content%%

## API

### PageHeader

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 标题栏旁的头像 | [AvatarProps](/components/avatar/) | - |  |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean | &lt;ArrowLeft /> |  |
| backText | 自定义 back text ，只在 `breadcrumbInline` 为 `false` 时显示 | ReactNode | `返回` |  |
| breadcrumb | 面包屑的配置 | [Breadcrumb](/components/breadcrumb/) | - |  |
| breadcrumbInline | 面包屑位置是否与 header、footer 显示在一个 div 内 | boolean | true |  |
| breadcrumbRender | 自定义面包屑区域的内容 | `(props, originBreadcrumb) => ReactNode` | - |  |
| extra | 操作区，位于 title 行的行尾 | ReactNode | - |  |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | ReactNode | - |  |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | true |  |
| subTitle | 自定义的二级标题文字 | ReactNode | - |  |
| tags | title 旁的 tag 列表 | [Tag](/components/tag/)\[] \| [Tag](/components/tag/) | - |  |
| title | 自定义标题文字 | ReactNode | - |  |
| onBack | 返回按钮的点击事件 | () => void | - |  |

<style>
  [data-theme="dark"] .site-page-header {
    border: 1px solid #303030;
  }
  [data-theme="dark"]  .site-page-header-ghost-wrapper {
    background-color: rgba(255,255,255,0.08);
  }
</style>
