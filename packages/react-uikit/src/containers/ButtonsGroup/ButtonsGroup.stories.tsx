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
                    name: 'Перейти в режим Я_В_ТАНКЕ',
                    onClick: () => {
                        const history = useHistory();
                        history.push('/basket/');
                    },
                },
                {
                    name: 'Функции тупежки',
                    onClick: () => {
                        const history = useHistory();
                        history.push('/stupidness/');
                    },
                },
                {
                    name: 'Настройка цены парашютов',
                    onClick: () => {
                        const history = useHistory();
                        history.push('/parachute-price-config/');
                    },
                },
                {
                    name: 'Запустить уничтожение всех продавальников',
                    onClick: () => {
                        const history = useHistory();
                        history.push('/destroy-all-sco/');
                    },
                },
                {
                    name: 'Рестарт убийц кожаных мешков',
                    onClick: () => {
                        const history = useHistory();
                        history.push('/reboot-killers/');
                    },
                },
            ]}
        />
    </StoryWrapper>
));
