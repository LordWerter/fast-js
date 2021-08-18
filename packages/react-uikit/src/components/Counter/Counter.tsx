/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-component-props */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    productCode: string;
    count: number;
    handleMinusCount: (productCode: string) => any;
    handlePlusCount: (productCode: string) => any;
}

import React from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap, Value, Btn } from './Counter.styles';

export const Counter: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, count, productCode, handleMinusCount, handlePlusCount } = props;
    // @ts-ignore
    const theme = { ...useTheme().components.Counter };
    const requiredThemeKeys = ['container', 'button', 'value', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap sizeId={sizeId} theme={mergeThemeObjects(theme.container, customize.container)}>
            <Btn
                sizeId={sizeId}
                theme={mergeThemeObjects(theme.button, customize.button)}
                style={{
                    backgroundImage: `url('${theme.images.minus}')`,
                }}
                onClick={() => {
                    handleMinusCount(productCode);
                }}
            />
            <Value sizeId={sizeId} theme={mergeThemeObjects(theme.value, customize.value)}>
                {count}
            </Value>
            <Btn
                sizeId={sizeId}
                theme={mergeThemeObjects(theme.button, customize.button)}
                style={{
                    backgroundImage: `url('${theme.images.plus}')`,
                }}
                onClick={() => {
                    handlePlusCount(productCode);
                }}
            />
        </CWrap>
    );
};

export default Counter;
