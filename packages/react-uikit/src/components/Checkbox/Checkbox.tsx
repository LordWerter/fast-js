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
/**
 * imports of packages
 */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
/**
 * imports of components
 */
/**
 * imports of styles
 */
import { CWrap, IconBox, Input, Label } from './Checkbox.styles';
/**
 * imports of constants
 */
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';
import { TSize } from '../../definitions/IPropTypes';

/**
 * Checkbox Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Checkbox: React.FC<IProps> = (props): JSX.Element => {
    const { name = `checkbox_${props.hash}`, label, sizeId = 'xl', disabled = false, callback, customize = {} } = props;

    // const [active, setActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // @ts-ignore
    const theme = { ...useTheme().components.Checkbox } || {};
    const requiredThemeKeys = ['container', 'icon', 'label', 'images'];

    for (const key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            color4Active={theme.color4Active}
            onClick={(event) => {
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
