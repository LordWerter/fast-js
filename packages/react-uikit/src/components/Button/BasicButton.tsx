import React from 'react';
import {useTheme} from '@emotion/react';

import Image from '../Image';

export interface ICWrapProps {
    padding: string;
    fontColor: string;
    fontSize: string;
    fontWeight: string;
    borderRadius: string;
    bgColor?: string;
    onClick: (event) => void;
}

import { CWrap, IconWrap, Caption } from './BasicButton.styles';

export type EventHandler = (event?: Event) => void;

export interface IProps {
    text: string;
    sizeId?: string;
    customize?: any;
    onClick?: EventHandler;
    onFocus?: EventHandler;
    onBlur?: EventHandler;
}
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const BasicButton: React.FC<any> = (props): JSX.Element => {
    const {
        text,
        onClick,
        sizeId = 'xl',
        customize = {},
        iconId = null,
    } = props;

    //@ts-ignore
    const initTheme = { ...useTheme().components.Button } || {};
    const requiredThemeKeys = [
        'container', 'caption', 'icon', 'image', 'images'
    ];
    const theme: any = {};

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(initTheme[curKey], customize[curKey]);
    })

    // TODO: add hover effect
    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            onClick={onClick}>
            {iconId && (
                <IconWrap
                    sizeId={sizeId}
                    theme={theme.icon}
                >
                    <Image customize={theme.image} bgImage={theme.images[iconId]} />
                </IconWrap>
            )}
            {text && <Caption
                sizeId={sizeId}
                theme={theme.caption}
            >{text}</Caption>}
        </CWrap>
    );
};

export default BasicButton;
