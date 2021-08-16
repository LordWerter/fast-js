import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../';

const store1 = init({ models: {} });

import ReactTable from './ReactTable';

const stories = storiesOf('Table', module);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <ReactTable columns={{}} data={{}} />
    </StoryWrapper>
));
