/// <reference types="react" />
import { RbmComponentProps } from '../RbmComponentProps';
export type InViewportProps = RbmComponentProps<{
    threshold?: number;
    onInViewportChange: (isInViewport: boolean) => void;
    root?: HTMLElement;
    rootMargin?: string;
}>;
declare function InViewport({ threshold, root, rootMargin, onInViewportChange, className, style, children, }: InViewportProps): JSX.Element;
declare const InViewportMemo: typeof InViewport;
export { InViewportMemo as InViewport };
