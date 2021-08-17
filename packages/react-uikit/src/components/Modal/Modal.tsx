/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTheme } from '@emotion/react';

export interface ICWrapProps {
    padding: string;
    fontColor: string;
    fontSize: string;
    fontWeight: string;
    borderRadius: string;
    bgColor?: string;
    onClick: (event: any) => void;
}

import { CWrap } from './Modal.styles';

export type EventHandler = (event?: Event) => void;

export interface IProps {
    text: string;
    sizeId?: string;
    customize?: any;
    showWindow?: any;
}
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

/**
 * renders BasicButton Item
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Modal: React.FC<any> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, children } = props;

    const requiredThemeKeys = ['container', 'modalwinwrap'];

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Modal };

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    // TODO: add hover effect
    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {children}
        </CWrap>
    );
};

export default Modal;
