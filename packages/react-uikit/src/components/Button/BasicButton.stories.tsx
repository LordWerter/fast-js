import React from 'react';
import { storiesOf } from '@storybook/react';
import { init } from '@rematch/core';
import BasicButton from './BasicButton';
import StoryWrapper from '../../containers/StoryWrapper';

const stories = storiesOf('Button', module);

const store1 = init({ models: {} });

stories.add('Basic', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'mobile'}
            customize={{}}
            onClick={() => {
                alert('onClick OK!');
            }}
        />
    </StoryWrapper>
));

stories.add('With icon', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <BasicButton
            text={'Help me'}
            sizeId={'mobile'}
            customize={{}}
            onClick={() => {
                alert('onClick OK!');
            }}
        />
    </StoryWrapper>
));
