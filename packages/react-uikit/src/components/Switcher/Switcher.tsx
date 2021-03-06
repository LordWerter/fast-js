import React, { useState, FocusEventHandler, FocusEvent } from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap, Roller } from './Switcher.styles';
import { TSize } from '../../definitions/IPropTypes';

export type SwitcherEvent<T> = (event: T, data?: { name?: string; value: boolean }) => void;
export interface IProps {
    sizeId?: TSize;
    customize?: any;
    isEnabled?: boolean;
    isDisabled?: boolean;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onChange?: SwitcherEvent<React.ChangeEvent<HTMLInputElement>>;
    callback?: any;
}

export const Switcher: React.FC<IProps> = (props): JSX.Element => {
    const {
        children,
        sizeId = 'mobile',
        customize = {},
        isEnabled = false,
        isDisabled = false,
        onChange,
        onBlur,
        onFocus,
    } = props;

    const [isEnable, setIsEnable] = useState(isEnabled);
    // @ts-ignore
    const theme = { ...useTheme().components.Switcher };
    Object.keys(theme).forEach((key: string) => {
        theme[key] = mergeThemeObjects(theme[key], customize[key]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            isDisabled={isDisabled}
            isEnabled={isEnable}
            onClick={() => {
                setIsEnable(!isEnable);
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChange && onChange(event);
            }}
            onBlur={(event: FocusEvent<HTMLInputElement>) => {
                onBlur && onBlur(event);
            }}
            onFocus={(event: FocusEvent<HTMLInputElement>) => {
                onFocus && onFocus(event);
            }}>
            <Roller sizeId={sizeId} theme={theme.roller} isEnabled={isEnable} isDisabled={isDisabled} />
            {children}
        </CWrap>
    );
};

export default Switcher;
