import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';

const store1 = init({ models: {} });

import Modal from './Modal';

const stories = storiesOf('Modal', module);

stories.add('Default', () => (
    <StoryWrapper store={store1} theme={{}} initialEntries={['/']}>
        <Modal>Hello</Modal>
    </StoryWrapper>
));
