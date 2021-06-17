import React from 'react';
import { useHistory } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StoryWrapper from '../../containers/StoryWrapper';
import ButtonsGroup from './ButtonsGroup';
import mocks from './__mocks__';

const label = 'Styles';
const defaultValue = {
    container: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
    button: {
        core: {},
        xs: {},
        s: {},
        m: {},
        l: {},
        xl: {},
    },
};
const groupId = 'CSS Styles to customize';
const { theme } = mocks;

const stories = storiesOf('ButtonsGroup', module).addDecorator(withKnobs);

stories.add('Basic config', () => (
    <StoryWrapper theme={theme}>
        <ButtonsGroup
            customize={object(label, defaultValue, groupId)}
        data={[
            {
                name: 'Перейти в режим продаж',
                onClick: () => {
                    const history = useHistory();
                    history.push('/basket/');
                },
            },
            {
                name: 'Функции КСО',
                onClick: () => {
                    const history = useHistory();
                    history.push('/basket/');
                },
            },
            {
                name: 'Настройка продажи пакетов',
                onClick: () => {
                    const history = useHistory();
                    history.push('/basket/');
                },
            },
            {
                name: 'Закрыть кассу',
                onClick: () => {
                    const history = useHistory();
                    history.push('/basket/');
                },
            },
            {
                name: 'Перезапустить КСО',
                onClick: () => {
                    const history = useHistory();
                    history.push('/basket/');
                },
            },
        ]}
        />
        </StoryWrapper>
));
