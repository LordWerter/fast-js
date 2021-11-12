import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Contacts.styles'

export type IProps = TElementProps;

const Contacts: React.FC<IProps> = ():JSX.Element => {
    return (
        <CWrap sizeId={'desktop'}>
            <h1>Contact us!</h1>
        </CWrap>
    );
};

export default Contacts;