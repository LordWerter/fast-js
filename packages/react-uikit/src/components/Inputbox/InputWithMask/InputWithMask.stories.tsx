import React from 'react';
import { init } from '@rematch/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import StoryWrapper from '../../../containers/StoryWrapper';

// import { ThemeAnnotation, genKnobsMock, themeElementTpl, mockImages } from '../../../../ui__themes';
import { sco as darvin } from '../../../../../ui__themes/src/darvin/apps';
// import { sco as dixy } from '../../../../../ui__themes/src/dixy/apps';

const store1 = init({ models: {} });

import InputWithMask from './InputWithMask';

const stories = storiesOf('Inputbox', module).addDecorator(withKnobs);

stories.add('Input with mask', () => (
    <StoryWrapper store={store1} theme={darvin} initialEntries={['/']}>
        <InputWithMask
            sizeId={'xl'}
            value={text('Вводимое значение:', '1111111111111111')}
            maskTpl={text('Шаблон маски:', '0000 0000 0000 0000')}
        />
    </StoryWrapper>
));
