/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { init } from '@rematch/core';
import BasicButton from './BasicButton';
import { StoryWrapper } from 'src';

const stories = storiesOf('Button', module);

const store1 = init({ models: {} });

stories.add('basic', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            customize={{}}
            onClick={() => {
                alert('onClick OK!');
            }}
        />
    </StoryWrapper>
));

stories.add('basic with icon', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'xl'}
            customize={{}}
            onClick={() => {
                alert('onClick OK!');
            }}
        />
    </StoryWrapper>
));
