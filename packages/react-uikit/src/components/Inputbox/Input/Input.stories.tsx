import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Input from './Input';

const stories = storiesOf('Inputbox', module);

stories.add('Darvin: simple', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Input sizeId={'xl'} value={'Текст для теста'} placeholder={'Введите значение'} customize={{}} />
    </StoryWrapper>
));
