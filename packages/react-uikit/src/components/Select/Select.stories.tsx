import { storiesOf } from '@storybook/react';
import React from 'react';
import { init } from '@rematch/core';
import styled from '@emotion/styled';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
// import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import Select from './Select';

const label = 'Styles';
const defaultValue = genKnobsMock('Select', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Select', module).addDecorator(withKnobs);

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

const TestWrap = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
`;

stories.add('Basic config', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Select labelImg={mockedLabel.img} labelText={mockedLabel.text} items={items}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
