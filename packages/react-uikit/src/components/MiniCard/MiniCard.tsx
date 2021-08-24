import React from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { mergeThemeObjects } from '../../utils';
import { CWrap, Image, Title } from './MiniCard.styles';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    data?: any;
    handleOnClick?: any;
}


export const MiniCard: React.FC<IProps> = (props): JSX.Element => {
    const {
        sizeId = 'mobile',
        customize = {},
        data = {
            link: '/',
            imageId: 'default',
            caption: 'default',
        },
        handleOnClick,
    } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.MiniCard };
    // const requiredThemeKeys = ['container', 'image', 'title', 'images']; // it's for checking required theme keys

    Object.keys(theme).forEach((elementName: string) => {
        theme[elementName] = mergeThemeObjects(theme[elementName], customize[elementName]);
    });

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
