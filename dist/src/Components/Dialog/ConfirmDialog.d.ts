/// <reference types="react" />
export type ConfirmDialogProps = {
    title?: string;
    message: string;
    close: (confirmed: boolean) => void;
    cancelText?: string;
    confirmText?: string;
};
declare function ConfirmDialog({ title, message, close, cancelText, confirmText }: ConfirmDialogProps): JSX.Element;
declare const ConfirmDialogMemo: typeof ConfirmDialog;
export { ConfirmDialogMemo as ConfirmDialog };
