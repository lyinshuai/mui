---
order: 6
title: 更新日志
toc: false
timeline: true
---

`mui` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 2.0.2

`2022-06-29`

- 修复表格组件，固定列在右边，纵向滚动时，表头和固定列不对齐问题
- 修复表格 footer 部分背景色与 header 背景色对齐
- 修复表格尺寸为 small 时，表头颜色丢失
- 修复表格非默认尺寸下，可选列切换单选/多选，抖动问题

## 2.0.1

`2022-06-27`

- 修改表格组件，横向边框颜色为#e5e6e7，使表格列在排序时边框可见
- 修改表格组件，滚动条样式宽为 4px，贴边，滚动属性由 auto 改为 overlay，其中 auto 兜底，兼容不支持 overlay 的浏览器
- 修改多行输入框 resize svg 图标路径引用为行内 Date Uri，解决路径引用 svg 方式导致的对脚手架 loader 要求

## 2.0.0

`2022-06-16`

一、版本更新内容

- 26 个组件的样式调整
- 级联、提及、穿梭框、表格、树选择等组件滚动条样式调整
- 输入框禁用状态增加边框，风格保持和选择器一致
- 选择器多选模式，禁用状态去掉边框，保持和非禁用时风格一致
- 树选择边框颜色修改为 #f2f3f5，使色调整体协调

二、优化组件列表

1. 卡片 Card
2. 描述列表 Descriptions
3. 标签页 Tabs
4. 栅格 Grid
5. 间距 Space
6. 图片 Image
7. 文字气泡 Tooltip
8. 树形控件 Tree
9. 日历 Calendar
10. 级联选择 Cascader
11. 滑动输入条 Slider
12. 树选择 TreeSelect
13. 进度条 Progress
14. 排版 Typography
15. 菜单 Menu
16. 表单 Form
17. 对话框 Modal
18. 表格 Table
19. 抽屉 Drawer
20. 页头 PageHeader
21. 列表 List
22. 开关 Switch
23. 评论 Comment
24. 提及 Mentions
25. 评分 Rate
26. 分割线 Divider

## 1.0.0

`2022-04-18`

一、介绍

`mui` 是 M Design 项目组下的组件库项目，基于 antd 4.19.4 版本开发。

本次优化不涉及旧有功能逻辑变化，仅限全局基础样式和组件样式变更调整。

全称：@m-design/mui 简称：mui

包名：

默认包：@m-design/mui（m-design 前缀）

变化：

1. 前缀由 ant 变为 m-design
2. 输出资源 dist 目录下 ant 开头改为 mui

> dist/ant.css -> dist/mui.css

ant 包：@m-design/mui-ant（ant 前缀）

变化：

1. 除了包名，样式前缀以及输出资源命名与 antd 保持一致

二、版本更新内容

- 全局基础颜色、字体、边框调整

- 全局状态类图标替换

- 13 个组件的 UI 样式优化调整

- 组件样式前缀默认调整为 m-design

三、优化组件列表

1. Empty 空状态

2. Popover 气泡卡片

3. Tag 标签

4. Alert 警告提示

5. Button 按钮

6. Avatar 头像

7. Checkbox 多选框

8. Radio 单选框

9. Input 输入框

10. Select 选择器

11. Message 全局提示

12. Result 结果

13. Spin 加载中
