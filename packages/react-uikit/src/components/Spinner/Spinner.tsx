import React from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap, ImageWrap, ClockImg, Circle, LoadingText } from './Spinner.styles';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    loadingText?: string;
}

export const Spinner: React.FC<IProps> = (props): JSX.Element => {
    const { loadingText, sizeId = 'mobile', customize = {} } = props;

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
