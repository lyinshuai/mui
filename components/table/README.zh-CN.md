`````
组件 / 数据展示

# 表格 Table

用于数据收集展示、分析整理、操作处理。
`````

%%Content%%

## API
### Table

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示外边框和列边框 | boolean | false |  |
| columns | 表格列的配置描述，具体项见下表 | [ColumnsType](#Column)\[] | - |  |
| components | 覆盖默认的 table 元素 | [TableComponents](https://git.io/fANxz) | - |  |
| dataSource | 数据数组 | object\[] | - |  |
| expandable | 配置展开属性 | [expandable](#expandable) | - |  |
| footer | 表格尾部 | function(currentPageData) | - |  |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | () => TableHtmlElement |  |
| loading | 页面是否加载中 | boolean \| [Spin Props](/components/spin/#API) | false |  |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | [默认值](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37) |  |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination/) 文档，设为 false 时不展示和进行分页 | object | - |  |
| rowClassName | 表格行的类名 | function(record, index): string | - |  |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |  |
| rowSelection | 表格行是否可选择，[配置项](#rowSelection) | object | - |  |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |  |
| showHeader | 是否显示表头 | boolean | true |  |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](/components/tooltip/) | true |  |
| size | 表格大小 | `x-large`\| `large`\| `middle` \| `small` | middle |  |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - |  |
| summary | 总结栏 | (currentData) => ReactNode | - |  |
| tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| `auto` \| `fixed` | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |  |
| title | 表格标题 | function(currentPageData) | - |  |
| onChange | 分页、排序、筛选变化时触发 | function(pagination, filters, sorter, extra: { currentDataSource: \[], action: `paginate` \| `sort` \| `filter` }) | - |  |
| onHeaderRow | 设置头部行属性 | function(columns, index) | - |  |
| onRow | 设置行属性 | function(record, index) | - |  |

#### onRow 用法

适用于 `onRow` `onHeaderRow` `onCell` `onHeaderCell`。

```jsx
<Table
  onRow={record => {
    return {
      onClick: event => {}, // 点击行
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, // 鼠标移入行
      onMouseLeave: event => {},
    };
  }}
  onHeaderRow={(columns, index) => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |  |
| className | 列样式类名 | string | - |  |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number | - |  |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string\[] | - |  |
| defaultFilteredValue | 默认筛选值 | string\[] | - |  |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |  |
| editable | 是否可编辑 | boolean | false |  |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean \| { showTitle?: boolean } | false |  |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode \| (props: [FilterDropdownProps](https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79)) => ReactNode | - |  |
| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
| filterIcon | 自定义 filter 图标。 | ReactNode \| (filtered: boolean) => ReactNode | false |  |
| filterMultiple | 是否多选 | boolean | true |  |
| filterMode | 指定筛选菜单的用户界面 | 'menu' \| 'tree' | 'menu' |  |
| filterSearch | 筛选菜单项是否可搜索 | Boolean | false |  |
| filters | 表头的筛选菜单项 | object\[] | - |  |
| fixed | （IE 下无效）列是否固定，可选 true (等效于 left) `left` `right` | boolean \| string | false |  |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |  |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格[行/列合并](#components-table-demo-colspan-rowspan) | function(text, record, index) {} | - |  |
| responsive | 响应式 breakpoint 配置列表。未设置则始终可见。 | [Breakpoint](https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1)\[] | - |  |
| shouldCellUpdate | 自定义单元格渲染时机 | (record, prevRecord) => boolean | - |  |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \| [Tooltip props](/components/tooltip/#API) | true |  |
| sortDirections | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | function \| boolean | - |  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` false | boolean \| string | - |  |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode | - |  |
| width | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)） | string \| number | - |  |
| onCell | 设置单元格属性 | function(record, rowIndex) | - |  |
| onFilter | 本地模式下，确定筛选的运行函数 | function | - |  |
| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |  |
| onHeaderCell | 设置头部单元格属性 | function(column) | - |  |

### ColumnGroup

| 参数  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| title | 列头显示文字 | ReactNode | -      |

### pagination

分页的配置项。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

更多配置项，请查看 [`Pagination`](/components/pagination/)。

### expandable

展开功能的配置。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| childrenColumnName | 指定树形结构的列名 | string | children |  |
| columnWidth | 自定义展开列宽度 | string \| number | - |  |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |  |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |  |
| expandedRowClassName | 展开行的 className | function(record, index, indent): string | - |  |
| expandedRowKeys | 展开的行，控制属性 | string\[] | - |  |
| expandedRowRender | 额外的展开行 | function(record, index, indent, expanded): ReactNode | - |  |
| expandIcon | 自定义展开图标，参考[示例](https://codesandbox.io/s/fervent-bird-nuzpr) | function(props): ReactNode | - |  |
| expandIconColumnIndex | 自定义展开按钮的列顺序，`-1` 时不展示 | number | - |  |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |  |
| fixed | 控制展开图标是否固定，可选 true `left` `right` | boolean \| string | false |  |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |  |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |  |
| onExpand | 点击展开图标时触发 | function(expanded, record) | - |  |
| onExpandedRowsChange | 展开的行变化时触发 | function(expandedRows) | - |  |

- `fixed`
  - 当设置为 true 或 `left` 且 `expandIconColumnIndex` 未设置或为 0 时，开启固定
  - 当设置为 true 或 `right` 且 `expandIconColumnIndex` 设置为表格列数时，开启固定

### rowSelection

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean | true |  |
| columnTitle | 自定义列表选择框标题 | ReactNode | - |  |
| columnWidth | 自定义列表选择框宽度 | string \| number | `32px` |  |
| fixed | 把选择框列固定在左边 | boolean | - |  |
| getCheckboxProps | 选择框的默认属性配置 | function(record) | - |  |
| hideSelectAll | 隐藏全选勾选框与自定义选择项 | boolean | false |  |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key` | boolean | - |  |
| renderCell | 渲染勾选框，用法与 Column 的 `render` 相同 | function(checked, record, index, originNode) {} | - |  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[] \| number\[] | \[] |  |
| defaultSelectedRowKeys | 默认选中项的 key 数组 | string\[] \| number\[] | \[] |  |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object\[] \| boolean | true |  |
| type | 多选/单选 | `checkbox` \| `radio` | `checkbox` |  |
| onChange | 选中项发生变化时的回调 | function(selectedRowKeys, selectedRows) | - |  |
| onSelect | 用户手动选择/取消选择某行的回调 | function(record, selected, selectedRows, nativeEvent) | - |  |
| onSelectAll | 用户手动选择/取消选择所有行的回调 | function(selected, selectedRows, changeRows) | - |  |
| onSelectInvert | 用户手动选择反选的回调 | function(selectedRowKeys) | - |  |
| onSelectNone | 用户清空选择的回调 | function() | - |  |

### scroll

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
| x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | - |
| y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string \| number | - |

### selection

| 参数     | 说明                       | 类型                        | 默认值 |
| -------- | -------------------------- | --------------------------- | ------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |
