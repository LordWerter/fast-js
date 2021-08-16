import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Logo from './Logo';

const stories = storiesOf('Logo', module);

stories.add('Colored Icon', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Logo customize={{}} curID={'ICON__COLOR'} />
    </StoryWrapper>
));
