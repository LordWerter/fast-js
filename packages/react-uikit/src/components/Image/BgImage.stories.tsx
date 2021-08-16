import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import BgImage from './BgImage';

const stories = storiesOf('Image', module);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <BgImage bgImage={''} customize={{}} />
    </StoryWrapper>
));
