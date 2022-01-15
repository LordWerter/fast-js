/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from '@emotion/react';
import React, {useEffect} from 'react';
import { TElementProps } from '../../../../definitions';
import { CWrap, Track, Slide, Arrow } from './Slider.styles';
import DOMFactory from './src/DOMComposition/DOMFactory';
export type IProps = TElementProps & {
    id: string;
};

export const Slider: React.FC<IProps> = (props): JSX.Element => {
    const {id} = props;

    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Slider };
    console.log(theme);
    const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    useEffect(() => {
        new DOMFactory({
            sliderType: 'carousel',

            wrapperSelector: `#${id}`,
            trackSelector: `#${id}-track`,
            elementSelector: `.${id}__slide`,
            leftArrowSelector: `.${id}__left-arrow`,
            rightArrowSelector: `.${id}__right-arrow`,
        });
    }, []);

    return (
        <CWrap id={id} sizeId={'desktop'} theme={theme.cwrap}>
            <Track id={`${id}-track`} sizeId={'desktop'} theme={theme.track}>
                <Slide id={`${id}-1`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-2`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-3`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-4`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-5`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-6`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-7`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-8`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-9`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-10`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-11`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-12`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-13`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-14`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-15`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-16`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-17`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-18`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-19`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
                <Slide id={`${id}-20`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{text}</Slide>
            </Track>
            <Arrow className={`${id}__left-arrow`} sizeId={'desktop'} theme={theme.leftarrow} />
            <Arrow className={`${id}__right-arrow`} sizeId={'desktop'} theme={theme.rightarrow} />
        </CWrap >
    );
};

export default Slider;
