import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './About.styles';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};

export const About: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = { ...useTheme().About };

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <h1>Hello!</h1>
        </CWrap>
    )
};

export default About;
