import { useTheme } from '@emotion/react';
import React from 'react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap } from './ImageSlides.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}

export const ImageSlides: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru', customise = null, children } = props;
    console.log(sizeId, langId, customise);
    //@ts-ignore
    const theme = { ...useTheme().ImageSlides };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            {children}
        </CWrap>
    );

};

export default ImageSlides;