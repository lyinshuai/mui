---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

展示文档样例。

## en-US

Display the document sample.

```jsx
import { Typography, Divider } from '@m-design/mui';

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

ReactDOM.render(
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
      M Design is an enterprise-level product design system aimed at improving design and development efficiency. It defines a set of middle and back-end design and front-end basic components to help us create a more consistent user experience more easily.
    </Paragraph>
    <Paragraph>
     The goal of M Design is to solve the problem of product experience through a general design system, and to provide guiding principles for product design to solve business problems. At the same time, it can promote the collaboration between the design department and the R&D department and become a communication between developers.
    </Paragraph>
    <Paragraph>
    M Design mainly serves the experience design and technical implementation of Feishu Shennuo's middle and back-end products, and is jointly constructed and maintained by the UED team and the front-end team.
    </Paragraph>
    <Title level={2}>Guidelines and Resources</Title>
    <Paragraph>
    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
    </Paragraph>
    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">Principles</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">Patterns</Link>
        </li>
        <li>
          <Link href="/docs/resources">Resource Download</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>

    <Divider />

    <Title>介绍</Title>
    <Paragraph>
      M Design 是一个旨在提升设计以及开发效率的企业级产品设计系统。它定义了一套中后台设计与前端基础组件，帮助我们更容易地创造更加一致的用户体验。
    </Paragraph>
    <Paragraph>
      M Design 的目标, 即通过通用的设计系统去解决产品体验的问题, 并为产品设计提供指导原则，解决业务问题，同时它能够促进设计部门和研发部门之间的协作, 成为开发者之间沟通的语言。
    </Paragraph>
     <Paragraph>
      M Design 主要服务于飞书深诺中后台产品的体验设计和技术实现，由UED团队和前端团队共同构建及维护。
    </Paragraph>
    <Title level={2}>设计资源</Title>
    <Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（Sketch 和Axure），来帮助业务快速设计出高质量的产品原型。
    </Paragraph>

    <Paragraph>
      按<Text keyboard>Esc</Text>键退出阅读……
    </Paragraph>
  </Typography>,
  CONTAINER,
);
```
