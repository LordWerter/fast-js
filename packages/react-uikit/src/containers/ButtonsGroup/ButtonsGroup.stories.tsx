/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../containers/StoryWrapper';
import ButtonsGroup from './ButtonsGroup';

const stories = storiesOf('ButtonsGroup', module);

stories.add('Basic config', () => (
    <StoryWrapper theme={{}}>
        <ButtonsGroup
            customize={{}}
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
