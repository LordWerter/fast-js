import * as React from 'react';
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react';
import store from '../../redux/store';
import initStore from '../../redux/initStore';
import theme from '../../theme';

import {Section} from './Section';

describe('Section', () => {
  let target: any;

  beforeEach(() => {
    initStore(store);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Section sectionType="FEATURES">Hello</Section>
        </ThemeProvider>
      </Provider>
    );
    target = screen.getByText('Hello');
  });

  it('renders Initial Render', () => {
    expect(!!target).toBe(true);
  });
});
