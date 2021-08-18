/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/forbid-component-props */
/**
 * imports & exports of namespaces, interfaces & types
 */
export type EventHandler = React.MouseEventHandler<HTMLButtonElement>;
export interface IProps {
    hash: string;
    sizeId?: TSize;
    name?: string;
    label?: string;
    disabled?: boolean;
    callback?: (isChecked: boolean) => void;
    onChange?: EventHandler;
    customize?: any;
}

import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { CWrap, IconBox, Input, Label } from './Checkbox.styles';
import { mergeThemeObjects } from '../../utils';
import { TSize } from '../../definitions/IPropTypes';

export const Checkbox: React.FC<IProps> = (props): JSX.Element => {
    const {
        name = `checkbox_${props.hash}`,
        label,
        sizeId = 'mobile',
        disabled = false,
        callback,
        customize = {},
    } = props;

    // const [active, setActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // @ts-ignore
    const theme = { ...useTheme().components.Checkbox };
    const requiredThemeKeys = ['container', 'icon', 'label', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            color4Active={theme.color4Active}
            onClick={() => {
                setIsChecked(!isChecked);
                console.log('click');
                callback && callback(!isChecked);
            }}>
            <IconBox
                sizeId={sizeId}
                theme={theme.icon}
                style={
                    isChecked
                        ? {
                              backgroundColor: theme.color4Active,
                              backgroundImage: `url('${theme.images.image4Active}')`,
                          }
                        : {}
                }>
                <Input id={props.hash} type={'checkbox'} disabled={disabled} name={name} />
            </IconBox>
            {label && (
                <Label sizeId={sizeId} theme={theme.label} htmlFor={props.hash}>
                    {label}
                </Label>
            )}
        </CWrap>
    );
};

export default Checkbox;
