import React from 'react';
import { Global } from '@emotion/react';

import BaseStyle from './base.styles';
import ResetStyle from './reset.styles';

export interface IProps {}

export const GlobalStyles: React.FC<IProps> = (): JSX.Element => {
    return (
        <>
            <Global styles={BaseStyle} />
            <Global styles={ResetStyle} />
        </>
    );
};

export default GlobalStyles;
