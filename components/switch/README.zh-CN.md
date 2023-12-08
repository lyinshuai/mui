`````
组件 / 数据输入

# 开关 Switch

互斥性的操作控件，用户可打开或关闭某个功能。
`````

%%Content%%

## API

### Switch

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | ReactNode | - |
| className | Switch 器类名 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| loading | 加载中的开关 | boolean | false |
| size | 开关大小，可选值：`default` `small` `mini` | string | `default` |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| onChange | 变化时回调函数 | function(checked: boolean, event: Event) | - |
| onClick | 点击时回调函数 | function(checked: boolean, event: Event) | - |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
