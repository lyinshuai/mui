---
order: 4
title:
  zh-CN: 查询模式 - 确定类目
  en-US: Lookup-Patterns - Certain Category
---

## zh-CN

示例。

## en-US

Basic Usage, set options of autocomplete with `options` property.

```tsx
import { Input, AutoComplete } from '@m-design/mui';
import { UserOutlined } from '@ant-design/icons';

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="https://www.google.com/search?q=design"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('M Design', 10000), renderItem('M Design UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('M Design UI FAQ', 60100), renderItem('M Design FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('M Design design language', 100000)],
  },
];

const Complete: React.FC = () => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);

ReactDOM.render(<Complete />, mountNode);
```

```css
.certain-category-search-dropdown .m-design-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .m-design-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .m-design-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .m-design-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .m-design-select-dropdown-menu {
  max-height: 300px;
}
```
