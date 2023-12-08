`````
组件 / 数据展示

# 图片轮播 Carousel

用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。
`````

%%Content%%

## API

### Carousel

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |  |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |  |
| dots | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true |  |
| easing | 动画效果 | string | `linear` |  |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |  |
| afterChange | 切换面板的回调 | function(current) | - |  |
| beforeChange | 切换面板的回调 | function(from, to) | - |  |

## 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

更多 API 可参考：<https://react-slick.neostack.com/docs/api>
