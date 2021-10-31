import React from 'react'
import { CWrap } from './Welcome.styles'

const Welcome: React.FC = (): JSX.Element => {
    return (
        <CWrap>
            <header>
                <h1>Logo</h1>
                <ul>
                    <li>MainPage</li>
                    <li>Contacts</li>
                    <li></li>
                </ul>
            </header>
        </CWrap>
    );
};

export default Welcome;
