import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './FAQ.styles';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};
export const FAQ: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = {...useTheme().FAQ};
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            
        </CWrap>
    )
};

export default FAQ;
