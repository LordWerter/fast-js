import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

import Checkbox from './Checkbox';

const store1 = init({ models: {} });

const label = 'Styles';
const defaultValue = genKnobsMock('Checkbox', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Checkbox', module).addDecorator(withKnobs);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Checkbox
            hash={'sergwergsdrgser'}
            sizeId={'xl'}
            label={'Отправить чек на e-mail'}
            onChange={() => {
                console.log('onChange event is working');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));

stories.add('Dixy', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <Checkbox
            hash={'sergwergsdrgser'}
            sizeId={'xl'}
            label={'Отправить чек на e-mail'}
            onChange={() => {
                console.log('onChange event is working');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
