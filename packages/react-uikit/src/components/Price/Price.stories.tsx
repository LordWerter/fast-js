import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Price from './Price';

const stories = storiesOf('Modal', module);

stories.add('Default', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Price
            value={1050.54}
            config={{
                type: 'default',
                delimiter: 'none',
                lang: 'ru',
            }}
        />
    </StoryWrapper>
));
