import React from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap, Image, Text } from './Logo.styles';
import { TSize } from '../../definitions/IPropTypes';

export type TLogoRenderType =
    | 'ICON__COLOR'
    | 'ICON__BLACK'
    | 'ICON__WHITE'
    | 'TEXT__COLOR'
    | 'TEXT__BLACK'
    | 'TEXT__WHITE'
    | 'FULL__COLOR__RAW'
    | 'FULL__BLACK__RAW'
    | 'FULL__WHITE__RAW'
    | 'FULL__COLOR__COLUMN'
    | 'FULL__BLACK__COLUMN'
    | 'FULL__WHITE__COLUMN'
    | 'SINGLE__COLOR'
    | 'SINGLE__BLACK'
    | 'SINGLE__WHITE';

export type TImageMode = {
    COLOR?: string;
    BLACK?: string;
    WHITE?: string;
    width?: string;
    height?: string;
    params?: any;
};

export type TFontMode = {
    content: string;
    params: any;
};

export interface ILogoDescriptor {
    width: string;
    height: string;
    direction?: 'RAW' | 'COLUMN';
    icon?: TImageMode | null;
    text?: TFontMode | null;
}

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    curID: TLogoRenderType;
}

const Logo = (props: IProps) => {
    const { sizeId = 'mobile', customize = {}, curID } = props;

    const idArr = curID.split('__');

    const type = idArr[0];

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Logo };
    Object.keys(theme).forEach((elementName: string) => {
        theme[elementName] = mergeThemeObjects(theme[elementName], customize[elementName]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {type !== 'TEXT' ? (
                <Image
                    sizeId={sizeId}
                    theme={theme.icon}
                    style={{
                        backgroundImage: `url('${theme.images[curID]}')`,
                    }}
                />
            ) : (
                <></>
            )}
            {type !== 'SINGLE' && type !== 'ICON' ? (
                <Text sizeId={sizeId} theme={theme.text}>
                    {theme.text.value}
                </Text>
            ) : (
                <></>
            )}
        </CWrap>
    );
};

export default Logo;
