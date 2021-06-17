import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';

import { StoryWrapper } from '../../../../ui__components';

// import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import Price from './Price';

const stories = storiesOf('Price', module);

stories.add('Darvin: rubles', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Price value={1050.54} config={{
            type: 'default',
            delimiter: 'none',
            lang: 'ru'
        }} />
    </StoryWrapper>
));

stories.add('Dixy: rubles', () => (
    <StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
        <Price value={1050.54} config={{
            type: 'nodelimiter',
            delimiter: 'none',
            lang: 'ru'
        }} />
    </StoryWrapper>
));
