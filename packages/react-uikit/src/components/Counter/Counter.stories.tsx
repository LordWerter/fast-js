import React, { useState } from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';
import Counter from './Counter';

const store1 = init({ models: {} });

const stories = storiesOf('Counter', module);

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
            customize={{}}
        />
    );
};

stories.add('Basic', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <TestCounter />
    </StoryWrapper>
));
