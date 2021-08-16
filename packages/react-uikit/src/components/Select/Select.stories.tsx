import { storiesOf } from '@storybook/react';
import React from 'react';
import { init } from '@rematch/core';
import styled from '@emotion/styled';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Select from './Select';

const stories = storiesOf('Select', module);

const mockedLabel = {
    img: 'ru',
    text: 'Выбрать язык',
};

const handleListItem = (id) => {
    console.log(id);
};

const items = [
    {
        id: 'ru',
        img: '',
        text: 'Русский',
        handler: handleListItem,
    },
    {
        id: 'en',
        img: '',
        text: 'English',
    },
    {
        id: 'br',
        img: '',
        text: 'Espaniol',
    },
];

stories.add('Basic config', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Select labelImg={mockedLabel.img} labelText={mockedLabel.text} items={items} customize={{}} />
    </StoryWrapper>
));
