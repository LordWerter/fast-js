/* eslint-disable react/forbid-component-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/**
 * imports & exports of namespaces, interfaces & types
 */
import { TSize } from '../../definitions/IPropTypes';
import React from 'react';
import { useTheme } from '@emotion/react';

export interface IProps {
    bgImage: string;
    sizeId?: TSize;
    customize?: any;
}

import { CWrap } from './BgImage.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

const BgImage: React.FC<IProps> = (props): JSX.Element => {
    const { bgImage, sizeId = 'xl', customize = {} } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.Image };
    const requiredThemeKeys = ['container'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        />
    );
};

export default BgImage;
