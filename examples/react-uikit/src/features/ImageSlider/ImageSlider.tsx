import { useTheme } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { TSize } from '../../definitions/TElementProps';
import allSlides from '../../theme/images/imageSlides';
import { CWrap, Dots, DotsWrap, Img, LeftArrow, RightArrow } from './ImageSlider.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}

export const ImageSlider: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', } = props;

    const slides = useRef(Object.values(allSlides));

    const [slideIndex, setSlideIndex] = useState(1);
    const [navVisibility, setNavVisibility] = useState(false);

    const nextSlide = () => {
        if (slideIndex !== slides.current.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === slides.current.length) {
            setSlideIndex(1);
        };
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(slides.current.length);
        };
    };

    const moveDot = (index: number) => {
        setSlideIndex(index);
    };

    //@ts-ignore
    const theme = { ...useTheme().ImageSlider };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} langId={langId} onMouseOver={() => setNavVisibility(true)} onMouseLeave={() => setNavVisibility(false)}>
            {slides.current.map((src, index) => {
                return (
                    <Img
                        src={src}
                        alt={`slide${'_' + (index + 1)}`}
                        sizeId={sizeId}
                        theme={slideIndex === index + 1 ? theme.slideactiveanim : theme.slidenoactive}
                        key={`slide${'_' + (index + 1)}`}
                        onClick={nextSlide}
                    />
                )
            })}
            <LeftArrow
                sizeId={sizeId}
                theme={navVisibility ? theme.leftarrowactive : theme.leftarrow}
                onClick={prevSlide}
            />
            <RightArrow
                sizeId={sizeId}
                theme={navVisibility ? theme.rightarrowactive : theme.rightarrow}
                onClick={nextSlide}
            />
            <DotsWrap sizeId={sizeId} theme={navVisibility ? theme.dotswrapactive : theme.dotswrap}>
                {Array.from({ length: slides.current.length }).map((item, index) => (
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

export default ImageSlider;