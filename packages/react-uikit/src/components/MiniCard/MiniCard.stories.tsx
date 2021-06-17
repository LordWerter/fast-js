import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
// import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import MiniCard from './MiniCard';

const label = 'Styles';
const defaultValue = genKnobsMock('MiniCard', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('MiniCard', module).addDecorator(withKnobs);

stories.add('Basic config', () =>
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <MiniCard
            customize={object(label, defaultValue, groupId)}
            data={{
                link: '/',
                imageId: 'default',
                caption: 'default',
            }} />
    </StoryWrapper>
);
