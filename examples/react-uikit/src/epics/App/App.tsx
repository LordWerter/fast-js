import { FC } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Global } from '@emotion/react'
import { CWrap, reset } from './App.styles'
import AppRouter from '../../routes';

const App: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Global styles={reset} />
            <CWrap>
                <Link to='/ '>Страница приветствия</Link>
                <Link className="contactLink" to='/contacts'>Контакты</Link>
            </CWrap>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
