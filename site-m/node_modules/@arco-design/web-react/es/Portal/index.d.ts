import { Component } from 'react';
export interface PortalWrapperProps {
    /** Portal 挂载的容器 */
    getContainer?: () => Element;
    childrenComponent?: Element;
    forceRender?: boolean;
    visible?: boolean;
}
declare class PortalWrapper extends Component<PortalWrapperProps> {
    static displayName: string;
    static defaultProps: {
        getContainer: () => HTMLElement;
    };
    instance: any;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PortalWrapper;
