import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';
import Keyboard from './Keyboard';
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
    board: {
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
};
const groupId = 'CSS Styles to customize';
const { theme } = mocks;

const stories = storiesOf('Keyboard', module).addDecorator(withKnobs);

stories.add('Symbols Keyboard', () => (
    <StoryWrapper theme={theme}>
        <Keyboard
            lang={'en'}
            handleOnKeyPress={(event: any) => {
                console.log(`Key is - ${event.code}`);
            }}
            customize={object(label, defaultValue, groupId)}
        />
    </StoryWrapper>
));
