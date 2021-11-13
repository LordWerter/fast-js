import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Contacts.styles'

export type IProps = TElementProps;

const Contacts: React.FC<IProps> = (): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Contacts };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <h1>Contact us!</h1>
        </CWrap>
    );
};

export default Contacts;