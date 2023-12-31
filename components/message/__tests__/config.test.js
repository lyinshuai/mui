import { sleep } from '../../../tests/utils';
import message, { getInstance } from '..';
import ConfigProvider from '../../config-provider';

describe('message.config', () => {
  // Mock for rc-util raf
  window.requestAnimationFrame = callback => window.setTimeout(callback, 16);
  window.cancelAnimationFrame = id => {
    window.clearTimeout(id);
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    message.destroy();
    jest.useRealTimers();
  });

  it('should be able to config top', () => {
    message.config({
      top: 100,
    });
    message.info('whatever');
    expect(document.querySelectorAll('.m-design-message')[0].style.top).toBe('100px');
  });

  it('should be able to config rtl', () => {
    message.config({
      rtl: true,
    });
    message.info('whatever');
    expect(document.querySelectorAll('.m-design-message-rtl').length).toBe(1);
  });

  it('should be able to config getContainer', () => {
    message.config({
      getContainer: () => {
        const div = document.createElement('div');
        div.className = 'custom-container';
        document.body.appendChild(div);
        return div;
      },
    });
    message.info('whatever');
    expect(document.querySelectorAll('.custom-container').length).toBe(1);
  });

  it('should be able to config maxCount', () => {
    message.config({
      maxCount: 5,
    });
    for (let i = 0; i < 10; i += 1) {
      message.info('test');
    }

    message.info('last');
    expect(document.querySelectorAll('.m-design-message-notice').length).toBe(5);
    expect(document.querySelectorAll('.m-design-message-notice')[4].textContent).toBe('last');
    jest.runAllTimers();
    expect(getInstance().component.state.notices).toHaveLength(0);
  });

  it('should be able to config duration', async () => {
    jest.useRealTimers();
    message.config({
      duration: 0.5,
    });
    message.info('last');
    expect(getInstance().component.state.notices).toHaveLength(1);

    await sleep(1000);
    expect(getInstance().component.state.notices).toHaveLength(0);
    message.config({
      duration: 3,
    });
  });

  it('customize prefix should auto get transition prefixCls', () => {
    message.config({
      prefixCls: 'light-message',
    });

    message.info('bamboo');

    expect(getInstance().config).toEqual(
      expect.objectContaining({
        transitionName: 'light-move-up',
      }),
    );

    message.config({
      prefixCls: '',
    });
  });

  it('should be able to global config rootPrefixCls', () => {
    ConfigProvider.config({ prefixCls: 'prefix-test', iconPrefixCls: 'bamboo' });
    message.info('last');
    expect(document.querySelectorAll('.m-design-message-notice')).toHaveLength(0);
    expect(document.querySelectorAll('.prefix-test-message-notice')).toHaveLength(1);
    expect(document.querySelectorAll('.bamboo-info-circle')).toHaveLength(1);
    ConfigProvider.config({ prefixCls: 'm-design', iconPrefixCls: null });
  });
  it('should be able to config prefixCls', () => {
    message.config({
      prefixCls: 'prefix-test',
    });
    message.info('last');
    expect(document.querySelectorAll('.m-design-message-notice')).toHaveLength(0);
    expect(document.querySelectorAll('.prefix-test-notice')).toHaveLength(1);
    message.config({
      prefixCls: '', // can be set to empty, ant default value is set in ConfigProvider
    });
  });

  it('should be able to config transitionName', () => {
    message.config({
      transitionName: '',
    });
    message.info('last');
    expect(document.querySelectorAll('.m-design-move-up-enter')).toHaveLength(0);
    message.config({
      transitionName: 'ant-move-up',
    });
  });

  it('should be able to config getContainer, although messageInstance already exists', () => {
    function createContainer() {
      const container = document.createElement('div');
      document.body.appendChild(container);
      return [
        container,
        () => {
          document.body.removeChild(container);
        },
      ];
    }
    const [container1, removeContainer1] = createContainer();
    const [container2, removeContainer2] = createContainer();
    expect(container1.querySelector('.m-design-message-notice')).toBeFalsy();
    expect(container2.querySelector('.m-design-message-notice')).toBeFalsy();
    message.config({
      getContainer: () => container1,
    });
    const messageText1 = 'mounted in container1';
    message.info(messageText1);
    expect(container1.querySelector('.m-design-message-notice').textContent).toEqual(messageText1);
    message.config({
      getContainer: () => container2,
    });
    const messageText2 = 'mounted in container2';
    message.info(messageText2);
    expect(container2.querySelector('.m-design-message-notice').textContent).toEqual(messageText2);
    removeContainer1();
    removeContainer2();
  });
});
