import { FC } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Global } from '@emotion/react'
import { Capp, reset } from './App.styles'
import AppRouter from '../../routes/AppRouter';

const App: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Global styles={reset} />
            <Capp>
                <Link to='/ '>Страница приветствия</Link>
                <Link className="contactLink" to='/contacts'>Контакты</Link>
            </Capp>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
