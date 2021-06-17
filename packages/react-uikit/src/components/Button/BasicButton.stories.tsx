import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { init } from '@rematch/core';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';
import StoryWrapper from '../../containers/StoryWrapper';

import BasicButton from './BasicButton';

const label = 'Styles';
const defaultValue = genKnobsMock('Button', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Button', module).addDecorator(withKnobs);

const store1 = init({ models: {} });

stories.add('Darvin: basic', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            isDisabled={false}
            onClick={() => {
                alert('onClick OK!');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));

stories.add('Darvin: with icon', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            isDisabled={false}
            onClick={() => {
                alert('onClick OK!');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));


stories.add('Dixy: basic', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            isDisabled={false}
            onClick={() => {
                alert('onClick OK!');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));

stories.add('Dixy: with icon', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            isDisabled={false}
            onClick={() => {
                alert('onClick OK!');
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
