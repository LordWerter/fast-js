/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../../utils';
import { CWrap, InputWrap, Label, InputBox, Placeholder, Notice } from './Input.styles';
import { TSize } from '../../../definitions/IPropTypes';

export type TLabel = {
    text: string;
    params: unknown;
};

export interface IProps {
    sizeId?: TSize;
    label?: any;
    value?: string;
    placeholder?: string | null;
    disabled?: boolean;
    theme?: {
        wrapper: any;
        label?: any;
        input?: any;
        placeholder?: any;
    } | null;
    customize?: any;
    withReset2EmptyValueBtn?: boolean;
    handleReset2EmptyValueBtn?: () => any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => any | null;
}

export const Input: React.FC<IProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        value = '',
        label = null,
        placeholder = null,
        disabled = false,
        customize = {},
        onChange = null,
    } = props;

    const [isActive, setIsActive] = useState(false);

    // @ts-ignore
    const theme = { ...useTheme().components.InputBox };
    const requiredThemeKeys = ['container', 'label', 'inputwrap', 'input', 'placeholder', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {label ? (
                <Label sizeId={sizeId} theme={theme.label}>
                    {label.text}
                </Label>
            ) : (
                <></>
            )}
            <InputWrap sizeId={sizeId} theme={isActive ? theme.states.isActive.inputwrap : theme.inputwrap}>
                <InputBox
                    sizeId={sizeId}
                    theme={isActive ? theme.states.isActive.input : theme.input}
                    value={value}
                    disabled={disabled}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if (onChange) onChange(event);
                    }}
                    onFocus={() => {
                        setIsActive(true);
                    }}
                    onBlur={() => {
                        setIsActive(false);
                    }}
                />
                {!value && (
                    <Placeholder sizeId={sizeId} theme={theme.placeholder}>
                        {placeholder}
                    </Placeholder>
                )}
            </InputWrap>
            <Notice sizeId={sizeId} theme={theme.notice}>
                {}
            </Notice>
        </CWrap>
    );
};

export default Input;
