/// <reference types="react" />
import { InputProps } from './Input';
export type HiddenInputProps<OnChangeType, OnBlurData, OnChangeEndData> = InputProps<OnChangeType, OnBlurData, OnChangeEndData> & {
    noFocusHint?: boolean;
};
declare function HiddenInput<OnChangeData, OnBlurData, OnChangeEndData>({ noFocusHint, className, ...props }: HiddenInputProps<OnChangeData, OnBlurData, OnChangeEndData>): JSX.Element;
declare const tmp: typeof HiddenInput;
export { tmp as HiddenInput };
