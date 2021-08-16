import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import MiniCard from './MiniCard';

const stories = storiesOf('MiniCard', module);

stories.add('Basic config', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <MiniCard
            customize={{}}
            data={{
                link: '/',
                imageId: 'default',
                caption: 'default',
            }}
        />
    </StoryWrapper>
));
