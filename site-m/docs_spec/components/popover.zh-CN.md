`````
组件 / 数据展示

# 气泡卡片 Popover

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。
`````

## 基本属性

### 组件定义

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。

### 组件构成

气泡卡片组件由背景、内容组成。

**1、背景** **（必选）** ：气泡卡片的背景。

**2、内容** **（必选）** ：气泡卡片的内容（如标题、段落、链接、按钮等）。

![](https://s3.meetsocial.cn/mdesign/assets/img/popover/01%E7%BB%84%E4%BB%B6%E6%9E%84%E6%88%90.png)

### 组件类型

| 类型     | 说明                                                         |
| ------ | ---------------------------------------------------------- |
| 文字型    | 气泡内容为纯文字的卡片，操作简单，提高效率；多用于名词解释、消息提示等。                       |
| 按钮/链接型 | 气泡内容为按钮或链接的卡片，对于用户干扰较少，减少了误击性，但可能会干扰用户的操作流程；多用于二次确认、提示指引等。 |

![](https://s3.meetsocial.cn/mdesign/assets/img/popover/02%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%9E%8B.png)

## 何时使用

- 当用户需要更多的附加信息时使用。

- **与“Tooltip 文字气泡”的区别：** 鼠标移入气泡卡片时，用户可以对卡片上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

![](https://s3.meetsocial.cn/mdesign/assets/img/popover/03%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8.png)

## 何时不使用

- 不要将过多的内容放到气泡卡片中
- 不要将关键信息放到气泡卡片中

## 布局

- ### 气泡卡片的位置

**卡片气泡支持12个不同方位**

支持 12 个不同的方位。分别为：“上左”、“上”、“上右”、“下左”、“下”、“下右”、“左上”、“左”、“左下”、“右上”、“右”、“右下”。

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/ce50e38625984fe78d3a6f3ac47d9479~tplv-uwbnlip3yd-image.image)

- ### **气泡卡片**内关闭

**控制气泡卡片的显示**

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1e1f0b91c4ac43bd8d7ab0f2d05b82ed~tplv-uwbnlip3yd-image.image)

## 文案指南

- 由于气泡卡片浮层是一种轻量级的容器，在使用过程中要注避免卡片内容元素过于复杂多样，造成视觉负担，影响效率。

## 交互行为

**鼠标状态**：可以通过悬停、聚焦和点击的方式来触发气泡卡片。

1. 鼠标悬浮在触发容器来呼出气泡卡片，鼠标移出触发容器，气泡卡片消失。

2. 鼠标点击触发容器来呼出气泡卡片，鼠标再次点击触发容器/点击页面其他区域，气泡卡片消失。

3. 鼠标点击触发容器来呼出气泡卡片，气泡卡片内容区域获得焦点/鼠标点击页面其他区域，气泡卡片消失。

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/ba23bed848504b8b8a63edcc85625825~tplv-uwbnlip3yd-image.image)

## 关联组件

[按钮](/react/components/button)

[文字气泡](/react/components/tooltip)