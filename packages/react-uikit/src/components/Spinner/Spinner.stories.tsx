import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Spinner from './Spinner';

const stories = storiesOf('Spinner', module);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Spinner loadingText={'Help me'} sizeId={'xl'} customize={{}} />
    </StoryWrapper>
));
