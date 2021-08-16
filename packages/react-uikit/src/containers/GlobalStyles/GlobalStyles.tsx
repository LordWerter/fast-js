/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { useTheme, Global } from '@emotion/react';

// import BaseStyle from './base.styles';
// import ResetStyle from './reset.styles';

export interface IProps {}

export const GlobalStyles: React.FC<IProps> = (props): JSX.Element => {
    // @ts-ignore
    const core = { ...useTheme().core } || {};

    return (
        <>
            <Global styles={core.fontFaces} />
            <Global styles={core.resets} />
            <Global styles={core.base} />
        </>
    );
};

export default GlobalStyles;
