import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../';

// import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import ReactTable from './ReactTable';

const stories = storiesOf('Table', module);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <ReactTable columns={{}} data={{}} />
    </StoryWrapper>));

stories.add('Dixy', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <ReactTable columns={{}} data={{}} />
    </StoryWrapper>));
