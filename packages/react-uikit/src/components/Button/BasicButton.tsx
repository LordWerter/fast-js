/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@emotion/react';
import Image from '../Image';

export type EventHandler = React.MouseEventHandler<HTMLButtonElement>;

export interface ICWrapProps {
    padding: string;
    fontColor: string;
    fontSize: string;
    fontWeight: string;
    borderRadius: string;
    bgColor?: string;
    onClick: EventHandler;
}

import { CWrap, IconWrap, Caption } from './BasicButton.styles';

export interface IProps {
    text: string;
    sizeId?: TSize;
    customize?: any;
    iconId?: string;
    onClick?: EventHandler;
    onFocus?: EventHandler;
    onBlur?: EventHandler;
}
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';
import { TSize } from '../../definitions/IPropTypes';

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const BasicButton: React.FC<IProps> = (props): JSX.Element => {
    const { text, onClick, sizeId = 'xl', customize = {}, iconId = null } = props;

    // @ts-ignore
    const initTheme = { ...useTheme().components.Button } || {};
    const requiredThemeKeys = ['container', 'caption', 'icon', 'image', 'images'];
    const theme: any = {};

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(initTheme[curKey], customize[curKey]);
    });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.container} onClick={onClick}>
            {iconId && (
                <IconWrap sizeId={sizeId} theme={theme.icon}>
                    <Image customize={theme.image} bgImage={theme.images[iconId]} />
                </IconWrap>
            )}
            {text && (
                <Caption sizeId={sizeId} theme={theme.caption}>
                    {text}
                </Caption>
            )}
        </CWrap>
    );
};

export default BasicButton;
