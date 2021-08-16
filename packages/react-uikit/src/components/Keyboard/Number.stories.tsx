import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import StoryWrapper from '../../containers/StoryWrapper';
import Number from './Number';
import mocks from './__mocks__';

const label = 'Styles';
const defaultValue = {
    container: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    row: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    key: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
};
const groupId = 'CSS Styles to customize';
const { theme } = mocks;

const stories = storiesOf('Keyboard', module).addDecorator(withKnobs);

stories.add('Numbers Keyboard', () => (
    <StoryWrapper theme={theme}>
        <Number
            handleOnClick={(keyValue: string) => {
                console.log(keyValue);
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
