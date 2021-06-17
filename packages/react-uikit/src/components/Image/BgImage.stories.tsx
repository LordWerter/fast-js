import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl, mockImages } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import BgImage from './BgImage';

const label = 'Styles';
const defaultValue = genKnobsMock('Image', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Image', module).addDecorator(withKnobs);

stories.add('Darvin', () =>
<StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
    <BgImage
        bgImage={mockImages.age}
        customize={object(label, defaultValue, groupId)}
    />
</StoryWrapper>);

stories.add('Dixy', () =>
<StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
    <BgImage
        bgImage={mockImages.age}
        customize={object(label, defaultValue, groupId)}
    />
</StoryWrapper>);
