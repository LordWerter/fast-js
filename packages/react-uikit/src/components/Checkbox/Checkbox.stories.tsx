import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';
import Checkbox from './Checkbox';

const store1 = init({ models: {} });

const stories = storiesOf('Checkbox', module);

stories.add('Basic', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Checkbox
            hash={'sergwergsdrgser'}
            sizeId={'mobile'}
            label={'Отправить чек на e-mail'}
            customize={{}}
            onChange={() => {
                console.log('onChange event is working');
            }}
        />
    </StoryWrapper>
));
