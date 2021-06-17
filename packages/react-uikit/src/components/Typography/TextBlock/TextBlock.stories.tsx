import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../../containers/StoryWrapper';
import TextBlock from './TextBlock';
import mocks from './__mocks__';

const label = 'Styles';
const defaultValue = {
    H1: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    H2: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    H3: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    H4: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    H5: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    H6: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    P: {
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

const stories = storiesOf('Text Blocks', module).addDecorator(withKnobs);

stories.add('H1 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H1'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('H2 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H2'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('H3 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H3'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('H4 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H4'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('H5 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H5'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('H6 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'H6'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));

stories.add('P Block', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock
            sizeId={'xl'}
            customize={object(label, defaultValue, groupId)}
            type={'P'}
        >{mocks.data.medium}</TextBlock>
    </StoryWrapper>
));
