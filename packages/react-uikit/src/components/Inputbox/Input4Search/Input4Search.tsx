/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTheme } from '@emotion/react';
import Input from '../Input';
import { mergeThemeObjects } from '../../../utils';
import { CWrap, SearchBtn } from './Input4Search.styles';
import { TSize } from '../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    value?: string;
    params?: any;
    onClick?: (event: any) => any;
    customize?: any;
}

export const Input4Search: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', value = '', params, onClick, customize = {} } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.Input4Search };
    return (
        <CWrap
            sizeId={sizeId}
            theme={customize.container ? mergeThemeObjects(theme.container, customize.container) : theme.container}>
            <Input sizeId={sizeId} value={value} placeholder={params.placeholder} />
            <SearchBtn
                sizeId={sizeId}
                theme={customize.searchBtn ? mergeThemeObjects(theme.searchBtn, customize.searchBtn) : theme.searchBtn}
                onClick={(event: any) => {
                    if (onClick) onClick(event);
                }}
            />
        </CWrap>
    );
};

export default Input4Search;
