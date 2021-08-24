import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';
import Dropbox from './Dropbox';

const store1 = init({ models: {} });

const stories = storiesOf('Dropbox', module);

const defaultItem = {
    id: 'fruits',
    caption: 'Фрукты',
};

const data = [
    {
        id: 'fruits',
        caption: 'Фрукты',
    },
    {
        id: 'vegetables',
        caption: 'Овощи',
    },
    {
        id: 'meat',
        caption: 'Мясо',
    },
    {
        id: 'bread',
        caption: 'Хлеб',
    },
];

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Dropbox sizeId={'mobile'} defaultItem={defaultItem} data={data} customize={{}} />
    </StoryWrapper>
));
