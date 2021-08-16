/**
 * imports & exports of namespaces, interfaces & types
 */
export interface IProps {
    theme?: any;
    children?: ReactNode;
    store?: any;
    initialEntries?: any;
    bgColor?: string;
}

/**
 * imports of packages
 */
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from '../GlobalStyles';
/**
 * imports of styles
 */
import { CWrap } from './StoryWrapper.styles';

export const StoryWrapper: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { children, store, theme = null, initialEntries = ['/'], bgColor = 'white' } = props;

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CWrap bgColor={bgColor}>
                    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
                </CWrap>
                <GlobalStyles />
            </ThemeProvider>
        </Provider>
    );
};

export default StoryWrapper;
