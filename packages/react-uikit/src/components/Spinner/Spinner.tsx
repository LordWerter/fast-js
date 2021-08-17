/* eslint-disable react/forbid-component-props */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
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
import { CWrap, ImageWrap, ClockImg, Circle, LoadingText } from './Spinner.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

export const Spinner: React.FC<any> = (props): JSX.Element => {
    const { loadingText, sizeId = 'xl', customize = {} } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.Spinner };
    const requiredThemeKeys = ['container', 'title', 'imagewrap', 'clockimg', 'circle', 'loadingtext', 'images'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <ImageWrap sizeId={sizeId} theme={theme.imagewrap}>
                <ClockImg
                    sizeId={sizeId}
                    theme={theme.clockimg}
                    style={{
                        backgroundImage: `url('${theme.images.center}')`,
                    }}
                />
                <Circle
                    sizeId={sizeId}
                    theme={theme.circle}
                    style={{
                        backgroundImage: `url('${theme.images.rotate}')`,
                    }}
                />
            </ImageWrap>
            <LoadingText sizeId={sizeId} theme={theme.loadingtext}>
                {loadingText}
            </LoadingText>
        </CWrap>
    );
};

export default Spinner;
