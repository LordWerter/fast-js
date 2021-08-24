import React from 'react';
import { useTheme, Global } from '@emotion/react';

export interface IProps {}

export const GlobalStyles: React.FC<IProps> = (): JSX.Element => {
    // @ts-ignore
    const core = { ...useTheme().core };

    return (
        <>
            <Global styles={core.fontFaces} />
            <Global styles={core.resets} />
            <Global styles={core.base} />
        </>
    );
};

export default GlobalStyles;
