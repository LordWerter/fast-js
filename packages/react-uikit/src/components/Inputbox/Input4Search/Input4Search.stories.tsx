import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import StoryWrapper from '../../../containers/StoryWrapper';

// import { ThemeAnnotation, genKnobsMock, themeElementTpl, mockImages } from '../../../../../ui__themes';
import { sco as darvin } from '../../../../../ui__themes/src/darvin/apps';
// import { sco as dixy } from '../../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import Input4Search from './Input4Search';

const stories = storiesOf('Inputbox', module).addDecorator(withKnobs);

stories.add('Darvin: input 4 search', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <Input4Search
            sizeId={'xl'}
            params={{
                placeholder: 'Введите, пожалуйста, имя:',
            }}
        />
    </StoryWrapper>
));
