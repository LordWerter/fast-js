import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import StoryWrapper from '../../../containers/StoryWrapper';
const store1 = init({ models: {} });

import Input4Search from './Input4Search';

const stories = storiesOf('Inputbox', module).addDecorator(withKnobs);

stories.add('For search', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Input4Search
            sizeId={'mobile'}
            params={{
                placeholder: 'Введите, пожалуйста, имя:',
            }}
        />
    </StoryWrapper>
));
