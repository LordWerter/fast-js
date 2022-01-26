/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from '@emotion/react';
import React, {useEffect} from 'react';
import { TElementProps } from '../../../../definitions';
import { CWrap, SliderWrap, Track, Slide, Arrow } from './Slider.styles';
import DOMFactory from './src/SliderFactory';
export type IProps = TElementProps & {
    id: string;
};

export const Slider: React.FC<IProps> = (props): JSX.Element => {
    const {id} = props;

    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Slider };
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    useEffect(() => {
        new DOMFactory({
            type: 'slides',
            sliderId: id,
            trackId: `${id}-track`,
            elementSelector: `.${id}__slide`,
            leftArrowId: `${id}__left-arrow`,
            rightArrowId: `${id}__right-arrow`,
        });
    }, []);

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Arrow id={`${id}__left-arrow`} sizeId={'desktop'} theme={theme.leftarrow} />
            <SliderWrap id={id} sizeId={'desktop'} theme={theme.sliderwrap}>
                <Track id={`${id}-track`} sizeId={'desktop'} theme={theme.track}>
                    {items.map((item, index) => <Slide key={index} id={`${id}-${item}`} className={`${id}__slide`} sizeId={'desktop'} theme={theme.slide}>{item}</Slide>)}
                </Track>
            </SliderWrap>
            <Arrow id={`${id}__right-arrow`} sizeId={'desktop'} theme={theme.rightarrow} />
        </CWrap >
    );
};

export default Slider;
