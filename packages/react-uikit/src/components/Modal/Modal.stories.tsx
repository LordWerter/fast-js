import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';

// import { ThemeAnnotation, genKnobsMock, themeElementTpl, mockImages } from '../../../../ui__themes';
import { sco as darvin } from '../../../../ui__themes/src/darvin/apps';
// import { sco as dixy } from '../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import Modal from './Modal';

const stories = storiesOf('Modal', module).addDecorator(withKnobs);

stories.add('Darvin', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Modal>Hello</Modal>
    </StoryWrapper>
));
