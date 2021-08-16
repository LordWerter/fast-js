import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../../containers/StoryWrapper';
import TextBlock from './TextBlock';
import mocks from './__mocks__';

const stories = storiesOf('Text Blocks', module);

stories.add('H1 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H1'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('H2 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H2'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('H3 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H3'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('H4 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H4'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('H5 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H5'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('H6 Title', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'H6'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));

stories.add('P Block', () => (
    <StoryWrapper theme={mocks.theme}>
        <TextBlock sizeId={'xl'} customize={{}} type={'P'}>
            {mocks.data.medium}
        </TextBlock>
    </StoryWrapper>
));
