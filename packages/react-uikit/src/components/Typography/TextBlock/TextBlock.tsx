/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@emotion/react';
// import { useState } from 'react';
import { TSize, TTextBlockType } from '../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    type: TTextBlockType;
}

import { H1, H2, H3, H4, H5, H6, P } from './TextBlock.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../../utils';

export const TextBlock: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, type = 'P', children } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.TextBlock };

    switch (type) {
        case 'H1':
            return (
                <H1 sizeId={sizeId} theme={mergeThemeObjects(theme.H1, customize.H1)}>
                    {children}
                </H1>
            );
        case 'H2':
            return (
                <H2 sizeId={sizeId} theme={mergeThemeObjects(theme.H2, customize.H2)}>
                    {children}
                </H2>
            );
        case 'H3':
            return (
                <H3 sizeId={sizeId} theme={mergeThemeObjects(theme.H3, customize.H3)}>
                    {children}
                </H3>
            );
        case 'H4':
            return (
                <H4 sizeId={sizeId} theme={mergeThemeObjects(theme.H4, customize.H4)}>
                    {children}
                </H4>
            );
        case 'H5':
            return (
                <H5 sizeId={sizeId} theme={mergeThemeObjects(theme.H5, customize.H5)}>
                    {children}
                </H5>
            );
        case 'H6':
            return (
                <H6 sizeId={sizeId} theme={mergeThemeObjects(theme.H6, customize.H6)}>
                    {children}
                </H6>
            );
        case 'P':
            return (
                <P sizeId={sizeId} theme={mergeThemeObjects(theme.P, customize.P)}>
                    {children}
                </P>
            );
    }
};

export default TextBlock;
