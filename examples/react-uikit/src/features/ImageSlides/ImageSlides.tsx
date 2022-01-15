import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TSize } from '../../definitions/TElementProps';
import allSlides from '../../theme/images/imageSlides';
import { CWrap, Dots, DotsWrap, Img, LeftArrow, RightArrow } from './ImageSlides.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}

export const ImageSlides: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', } = props;

    const slides = Object.values(allSlides);

    const [slideIndex, setSlideIndex] = useState(1);
    const [dotVisibility, setDotVisibility] = useState(false);

    const nextSlide = () => {
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === slides.length) {
            setSlideIndex(1);
        };
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(slides.length);
        };
    };

    const moveDot = (index: number) => {
        setSlideIndex(index);
    };

    //@ts-ignore
    const theme = { ...useTheme().ImageSlides };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} langId={langId} onMouseOver={() => setDotVisibility(true)} onMouseLeave={() => setDotVisibility(false)}>
            {slides.map((src, index) => {
                return (
                    <Img
                        src={src}
                        alt={`slide${'_' + (index + 1)}`}
                        sizeId={sizeId}
                        theme={slideIndex === index + 1 ? theme.slideactiveanim : theme.slidenoactive}
                        key={`slide${'_' + (index + 1)}`}
                    />
                )
            })}
            <LeftArrow
                sizeId={sizeId}
                theme={theme.leftarrow}
                onClick={prevSlide}
            />
            <RightArrow
                sizeId={sizeId}
                theme={theme.rightarrow}
                onClick={nextSlide}
            />
            <DotsWrap sizeId={sizeId} theme={dotVisibility ? theme.dotswrapactive : theme.dotswrap}>
                {Array.from({ length: slides.length }).map((item, index) => (
                    <Dots
                        sizeId={sizeId}
                        theme={slideIndex === index + 1 ? theme.dotactive : theme.dots}
                        key={`dot${'_' + (index + 1)}`}
                        onClick={() => moveDot(index + 1)}
                    />
                ))}
            </DotsWrap>
        </CWrap>
    );

};

export default ImageSlides;