import React, { ReactElement } from 'react';
export declare type HolderRef = {
    addInstance?: (ins: ReactElement) => void;
    removeInstance?: (ins: ReactElement) => void;
};
declare const ContextHolderElement: React.ForwardRefExoticComponent<React.RefAttributes<HolderRef>>;
export default ContextHolderElement;
