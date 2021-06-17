import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

import Dropbox from './Dropbox';

const store1 = init({ models: {} });

const label = 'Styles';
const defaultValue = genKnobsMock('Dropbox', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Dropbox', module).addDecorator(withKnobs);

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
    }
]

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Dropbox
            sizeId={'xl'}
            defaultItem={defaultItem}
            data={data}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));

stories.add('Dixy', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <Dropbox
            sizeId={'xl'}
            defaultItem={defaultItem}
            data={data}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
