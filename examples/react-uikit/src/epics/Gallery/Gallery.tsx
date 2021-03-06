import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react'
import { TElementProps } from '../../definitions';
import ImageSlider from '../../features/ImageSlider';
import { CWrap } from './Gallery.styles';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};

export const Gallery: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = { ...useTheme().Gallery }
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <ImageSlider sizeId={'desktop'} />
        </CWrap>
    )
};

export default Gallery;
