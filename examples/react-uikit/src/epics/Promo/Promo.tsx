import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Promo.styles';


export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};

export const Promo: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = { ...useTheme().Promo };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            
        </CWrap>
    )
};

export default Promo;
