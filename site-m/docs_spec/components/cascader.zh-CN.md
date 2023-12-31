`````
组件 / 数据输入

# 级联选择 Cascader

指在选择器选项数量较多时，采用多级分类的方式将选项进行分隔。
`````

## 基本属性

### 组件定义

级联选择是指在选择器Select 选项数量较大时，采用多级分类的方式将选项进行分隔，便于用户选择。

### 组件构成

| 构成元素       | 说明                                    |
| ---------- | ------------------------------------- |
| 1.选择器（必有）  | 可以只支持选择，或者可以支持直接搜索选项并选择               |
| 2.下拉面板（必有） | 在同一个浮层中包含多个层级的菜单，选择每个层级时需要反馈选项结果至选择器中 |

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/01%E7%BB%84%E4%BB%B6%E6%9E%84%E6%88%90.png)

### 组件类型

| 类型        | 说明                                                 |
| --------- | -------------------------------------------------- |
| 1、级联选择器单选 | 悬停或点击父级，弹出子级的选项；情况一为选择到最末子级才能完成选择，情况二为选择父级选项即可完成选择 |
| 2、级联选择器多选 | 可勾选多个选项，被勾选选项以标签形式反馈至输入框中                          |

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e87847604daf485780f03a6469e38a89~tplv-uwbnlip3yd-image.image)

在以上分类的基础上可添加附加功能，如：搜索选项并选择。

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/02%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%9E%8B-2.png)

### 组件尺寸

设置 size 可以使用四种尺寸（mini , small , default , large）的选择器，高度分别对应24px、28px、32px、36px。

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/03%E7%BB%84%E4%BB%B6%E5%B0%BA%E5%AF%B8.png)

### 组件状态

1.  **常见状态：** Default、Hover、Active

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/04%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81-%E5%B8%B8%E8%A7%81%E7%8A%B6%E6%80%81.png)

2.  **移入展开**：移入展开下级菜单，点击完成选择

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3421ce27395148d087cdf14bb00d5686~tplv-uwbnlip3yd-image.image)

3.  **动态加载选项：** 若存在网络延迟等情况，可利用动态图标显示正在加载选项

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/05%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81-%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD.png)

4.  **选项禁用：** 禁用的选项置灰显示，鼠标悬浮至禁用选项上出现禁用icon

![](https://s3.meetsocial.cn/mdesign/assets/img/cascader/06%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81-%E9%80%89%E9%A1%B9%E7%A6%81%E7%94%A8.png)

## 何时使用

1. 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等；
2. 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择；
3. 比起**Select 选择器**组件，可以在同一个浮层中完成选择，有较好的体验；

## 布局

下拉面板顶部对齐，不同层级面板保持一样的高度，保持操作的一致性和流畅度

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cede3d9ff25845b09c1e6bea6dc3630a~tplv-uwbnlip3yd-image.image)

## 文案指南

**层级要符合常规认知：** 比如地址选择，就可以按省市区一层层分类

![](https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/d2a9dca4a966464db4368b07dfb76d88~tplv-uwbnlip3yd-image.image)

## 关联组件

[下拉菜单](/react/components/dropdown)

[选择器](/react/components/select)
