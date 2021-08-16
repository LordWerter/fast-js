/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
// import {useState} from 'react';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    data?: any;
    handleOnClick?: any;
}

import { CWrap, Image, Title } from './MiniCard.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

export const MiniCard: React.FC<IProps> = (props): JSX.Element => {
    const {
        sizeId = 'xl',
        customize = {},
        data = {
            link: '/',
            imageId: 'default',
            caption: 'default',
        },
        handleOnClick,
    } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.MiniCard } || {};
    const requiredThemeKeys = ['container', 'image', 'title', 'images'];

    // @ts-ignore
    for (const key of requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            onClick={() => {
                handleOnClick && handleOnClick();
            }}>
            {data.link ? <Link to={data.link} /> : <></>}
            <Image sizeId={sizeId} imageId={data.imageId} theme={theme.image} />
            <Title sizeId={sizeId} theme={theme.title}>
                {data.caption}
            </Title>
        </CWrap>
    );
};

export default MiniCard;
