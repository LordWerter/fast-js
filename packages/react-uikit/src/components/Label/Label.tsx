/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export interface IProps {
    text: number | string;
    sizeId?: any;
    customize?: any;
}
/**
 * imports of packages
 */
import React from 'react';
import { useTheme } from '@emotion/react';
/**
 * imports of components
 */
/**
 * imports of styles
 */
import { CWrap, Prefix, Postfix } from './Label.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

/**
 * Label Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Label: React.FC<IProps> = (props): JSX.Element => {
    const { text, sizeId = 'xl', customize = {} } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.Label };
    const requiredThemeKeys = ['container', 'prefix', 'postfix', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <Prefix sizeId={sizeId} theme={theme.prefix}>
                {}
            </Prefix>
            {text}
            <Postfix sizeId={sizeId} theme={theme.postfix}>
                {}
            </Postfix>
        </CWrap>
    );
};

export default Label;
