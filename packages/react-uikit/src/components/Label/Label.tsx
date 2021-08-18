/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap, Prefix, Postfix } from './Label.styles';

export interface IProps {
    text: number | string;
    sizeId?: any;
    customize?: any;
}

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
