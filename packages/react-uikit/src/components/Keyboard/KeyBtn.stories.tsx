/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '../../containers/StoryWrapper';
import KeyBtn from './KeyBtn';

const stories = storiesOf('Keyboard', module).addDecorator(withKnobs);

stories.add('Single Button', () => (
    <StoryWrapper>
        <KeyBtn
            boardId={'ru'}
            keyCode={'81'}
            keyValue={'q'}
            capslock
            callback={(keyValue) => {
                console.log(keyValue);
            }}
        />
    </StoryWrapper>
));
