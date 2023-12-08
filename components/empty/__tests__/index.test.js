import React from 'react';
import { render, mount } from 'enzyme';
import Empty from '..';
import ConfigProvider from '../../config-provider';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';

describe('Empty', () => {
  mountTest(Empty);
  rtlTest(Empty);

  it('image size should change', () => {
    const wrapper = mount(<Empty imageStyle={{ height: 20 }} />);
    expect(wrapper.find('.m-design-empty-image').props().style.height).toBe(20);
  });

  it('description can be false', () => {
    const wrapper = mount(<Empty description={false} />);
    expect(wrapper.find('.m-design-empty-description').length).toBe(0);
  });

  it('should render in RTL direction', () => {
    const wrapper = mount(
      <ConfigProvider direction="rtl">
        <Empty />
      </ConfigProvider>,
    );
    expect(render(wrapper)).toMatchSnapshot();
  });
});