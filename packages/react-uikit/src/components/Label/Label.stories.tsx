import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Label from './Label';

const stories = storiesOf('Label', module);

stories.add('Basic', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Label sizeId={'xl'} customize={{}} text={'10000000'} />
    </StoryWrapper>
));
