/**
 * imports & exports of namespaces, interfaces & types
 */
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

/**
 * imports of packages
 */
import React from 'react';
import {useTheme} from '@emotion/react';

/**
 * imports of components
 */
// import Image from '../Image';
/**
 * imports of styles
 */
import { CWrap, Image, Text } from './Logo.styles';

/**
 * imports of constants
 */
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * Logo Component
 * @param props implements IProps
 * @description renders Logotype
 */
const Logo = (props: IProps) => {
    const { sizeId = 'xl', customize = {}, curID } = props;
    
    const idArr = curID.split('__');
    
    const type = idArr[0];
    
    //@ts-ignore
    const theme: {[key in string]: any} = { ...useTheme().components.Logo };
    if (typeof(theme) === 'object') {
        for (let key in theme) {
            theme[key] = mergeThemeObjects(theme[key], customize[key]);
        }
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
        >
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
                <Text
                    sizeId={sizeId}
                    theme={theme.text}
                >{theme.text.value}</Text>
            ) : (
                <></>
            )}
        </CWrap>
    );
};

export default Logo;
