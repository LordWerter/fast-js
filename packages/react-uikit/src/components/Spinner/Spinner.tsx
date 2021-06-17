/**
 * imports of packages
 */
import React from 'react';
import {useTheme} from '@emotion/react';
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
import {mergeThemeObjects} from '../../utils';

/**
 * Label Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Spinner: React.FC<any> = (props): JSX.Element => {
    const {
        loadingText,
        sizeId = 'xl',
        customize = {},
    } = props;

    //@ts-ignore
    const theme = { ...useTheme().components.Spinner } || {};
    const requiredThemeKeys = [
        'container', 'title', 'imagewrap', 'clockimg', 'circle', 'loadingtext', 'images'
    ];

    for (let key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
        >
            <ImageWrap
                sizeId={sizeId}
                theme={theme.imagewrap}
            >
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
            <LoadingText
                sizeId={sizeId}
                theme={theme.loadingtext}
            >{loadingText}</LoadingText>
        </CWrap>
    );
};

export default Spinner;
