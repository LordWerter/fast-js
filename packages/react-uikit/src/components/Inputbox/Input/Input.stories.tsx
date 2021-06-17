import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../../ui__themes';
import { sco as darvin } from '../../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import Input from './Input';

const label = 'Styles';
const defaultValue = genKnobsMock('Inputbox', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';


const stories = storiesOf('Inputbox', module).addDecorator(withKnobs);

stories.add('Darvin: simple', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Input
            sizeId={'xl'}
            value={text('Вводимое значение:', 'Текст для теста')}
            placeholder={'Введите значение'}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));

stories.add('Dixy: simple', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <Input
            sizeId={'xl'}
            value={text('Вводимое значение:', 'Текст для теста')}
            placeholder={'Введите значение'}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
