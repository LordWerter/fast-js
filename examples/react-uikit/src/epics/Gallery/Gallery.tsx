import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Gallery.styles';

export type IProps = TElementProps;

export const Gallery: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = {...useTheme().Gallery}
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            
        </CWrap>
    )
};

export default Gallery;
