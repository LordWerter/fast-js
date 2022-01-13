import { useTheme } from '@emotion/react';
import React from 'react';
import { TSize } from '../../definitions/TElementProps';
import allSlides from '../../theme/images/imageSlides';
import { CWrap } from './ImageSlides.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}

const slides = Object.values(allSlides);

export const ImageSlides: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru', customise = null, } = props;
    console.log(sizeId, langId, customise);
    //@ts-ignore
    const theme = { ...useTheme().ImageSlides };
    console.log(slides);

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {/* {children} */}
            {/* {slides.map((src) => { return <img src={src} alt /> },} */}

        </CWrap>
    );

};

export default ImageSlides;