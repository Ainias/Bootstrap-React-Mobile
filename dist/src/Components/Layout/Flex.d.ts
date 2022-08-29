/// <reference types="react" />
import { RbmComponentProps } from '../RbmComponentProps';
import { ViewWithoutListenersProps } from './ViewWithoutListeners';
export declare type FlexProps<AsType extends keyof JSX.IntrinsicElements> = RbmComponentProps<ViewWithoutListenersProps<AsType> & {
    horizontal?: boolean;
    grow?: boolean;
}>;
declare const tmp: import("../../helper/withForwardRef").RefComponent<FlexProps<keyof JSX.IntrinsicElements>, SVGSymbolElement | SVGElement | HTMLObjectElement | HTMLElement | HTMLLinkElement | HTMLHtmlElement | SVGTextElement | HTMLInputElement | HTMLProgressElement | HTMLSelectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataListElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLIFrameElement | HTMLImageElement | HTMLModElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMapElement | HTMLMetaElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLParagraphElement | HTMLParamElement | HTMLPreElement | HTMLQuoteElement | HTMLSlotElement | HTMLScriptElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableDataCellElement | HTMLTextAreaElement | HTMLTableHeaderCellElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLWebViewElement | SVGSVGElement | SVGCircleElement | SVGClipPathElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGFilterElement | SVGForeignObjectElement | SVGGElement | SVGImageElement | SVGLineElement | SVGLinearGradientElement | SVGMarkerElement | SVGMaskElement | SVGMetadataElement | SVGPathElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGStopElement | SVGSwitchElement | SVGTextPathElement | SVGTSpanElement | SVGUseElement | SVGViewElement>;
export { tmp as Flex };
