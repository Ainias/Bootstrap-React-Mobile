import * as React from 'react';
import { withMemo } from '../../../helper/withMemo';
import { RbmComponentProps } from '../../RbmComponentProps';
import { ReactChild, useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from '../../Layout/Flex';
import { Grow } from '../../Layout/Grow';
import { Text, TEXT_SIZE } from '../../Text/Text';
import { Block } from '../../Layout/Block';
import { Clickable } from '../../Clickable/Clickable';

import styles from './spoiler.scss';
import classNames from 'classnames';
import { OptionalListener, useListener } from '../../Hooks/useListener';

export type SpoilerProps<OnClickData> = RbmComponentProps<
    {
        title: ReactChild;
        initialOpen?: boolean;
        open?: boolean;
        noClosingAnimation?: boolean;
    } & OptionalListener<'onClick', OnClickData>
>;

function Spoiler<OnClickData>({
    title,
    children,
    initialOpen = false,
    noClosingAnimation = false,
    className,
    open,
    ...listenerProps
}: SpoilerProps<OnClickData>) {
    // Variables

    // Refs

    // States
    const [isOpen, setIsOpen] = useState(open ?? initialOpen);
    const [isInitialValue, setIsInitialValue] = useState(true);
    const savedOpen = useRef(open);

    // Selectors

    // Callbacks
    const onClickListener = useListener<'onClick', OnClickData, boolean>('onClick', listenerProps);

    const toggleOpen = useCallback(() => {
        if (open !== undefined) {
            onClickListener?.(!open);
        } else {
            setIsInitialValue(false);
            setIsOpen((old) => {
                onClickListener?.(!old);
                return !old;
            });
        }
    }, [onClickListener, open]);

    // Effects
    useEffect(() => {
        if (savedOpen.current !== open) {
            setIsInitialValue(false);
        }
    }, [open]);

    // Other
    const titleComponent =
        typeof title === 'string' || typeof title === 'number' ? <Text size={TEXT_SIZE.large}>{title}</Text> : title;

    // Render Functions
    return (
        <Clickable
            onClick={toggleOpen}
            className={classNames(className, styles.spoiler, {
                [styles.open]: open ?? isOpen,
                [styles.noAnimation]: isInitialValue,
                [styles.noClosingAnimation]: noClosingAnimation,
            })}
        >
            <Flex horizontal={true}>
                <Grow>{titleComponent}</Grow>
            </Flex>
            <Block className={styles.bodyContainer}>
                <Block __allowChildren="all" className={styles.body}>
                    {children}
                </Block>
            </Block>
        </Clickable>
    );
}

// Need SpoilerMemo for autocompletion of phpstorm
const SpoilerMemo = withMemo(Spoiler, styles);
export { SpoilerMemo as Spoiler };
