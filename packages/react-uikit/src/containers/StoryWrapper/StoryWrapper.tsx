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

import { LogProvider } from '../../../../service__logbuilder/src';
import GlobalStyles from '../GlobalStyles';
/**
 * imports of styles
 */
import { CWrap } from './StoryWrapper.styles';

import mocks from './__mocks__';
/**
 * StoryWrapper Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const StoryWrapper: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { children, store = mocks.store, theme = null, initialEntries = ['/'], bgColor="white" } = props;

    return (
        <LogProvider hostURL={'localhost:6006'} seviceURL={'logs/sco'}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CWrap bgColor={bgColor}>
                            <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
                    </CWrap>
                    <GlobalStyles />
                </ThemeProvider>
            </Provider>
        </LogProvider>
    );
};

export default StoryWrapper;
