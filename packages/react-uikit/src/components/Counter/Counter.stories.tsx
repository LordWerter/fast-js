import React, { useState } from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

import { ThemeAnnotation, genKnobsMock, themeElementTpl } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

import Counter from './Counter';

const store1 = init({ models: {} });

const label = 'Styles';
const defaultValue = genKnobsMock('Counter', ThemeAnnotation, themeElementTpl);
const groupId = 'CSS Styles to customize';

const stories = storiesOf('Counter', module).addDecorator(withKnobs);

const TestCounter = () => {
    const [count, setCount] = useState(5);
    return (
        <Counter
            count={count}
            productCode={'vodkaStolich05'}
            handleMinusCount={(productCode: string) => {
                setCount(count > 0 ? count - 1 : 0);
                console.log(`minus ${productCode}`);
                console.log(count);
            }}
            handlePlusCount={(productCode: string) => {
                setCount(count + 1);
                console.log(`plus ${productCode}`);
                console.log(count);
            }}
            customize={object(label, defaultValue, groupId)}
        />
    );
};

stories.add('Darvin', () =>
<StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
    <TestCounter />
</StoryWrapper>);

stories.add('Dixy', () =>
<StoryWrapper store={store1} theme={dixy} initialEntries={['/']}>
    <TestCounter />
</StoryWrapper>);
