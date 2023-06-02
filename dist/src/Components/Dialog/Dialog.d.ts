import * as React from 'react';
import { RbmComponentProps } from '../RbmComponentProps';
import { ReactElement } from 'react';
export type DialogProps<ReturnData> = RbmComponentProps<{
    closable?: boolean;
    onClose?: (data?: ReturnData, identifier?: number) => void;
    identifier?: number;
}, {
    children: ReactElement<Record<string, any> & {
        close?: (data?: ReturnData) => void;
    }> | string | number;
}>;
declare function Dialog<ReturnData>({ style, children, className, closable, onClose, identifier, }: DialogProps<ReturnData>): React.JSX.Element | null;
declare const DialogMemo: typeof Dialog;
export { DialogMemo as Dialog };
