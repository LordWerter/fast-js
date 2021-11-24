import { useTheme } from '@emotion/react';
import React from 'react';
import { useTypedSelector } from '../../assets/hooks';
import { useActions } from '../../assets/hooks/';
import { TElementProps } from '../../definitions';
import Footer from '../../features/Footer';
import Header from '../../features/Header';
import AppRouter from '../../routes';
import { CWrap } from './App.styles';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
    const navbarVisibility = useTypedSelector(state => state.navbarVisibility);
    const { hideNavbar } = useActions();

    //@ts-ignore
    const theme = { ...useTheme().App };
    return (
        <CWrap
            sizeId={'desktop'}
            theme={theme.cwrap}
            onClick={(e) => { navbarVisibility.visibility && hideNavbar() }}
        >
            <Header sizeId={'desktop'} />
            <AppRouter
                sizeId={'desktop'}
            />
            <Footer sizeId={'desktop'} />
        </CWrap>
    );
};

export default App;
