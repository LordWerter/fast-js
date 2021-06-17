/**
 * imports & exports of namespaces, interfaces & types
 */
import { TSize } from '../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    value?: string;
    params?: any; 
    onClick?: (event) => void;
    customize?: any;
}
/**
 * imports of packages
 */
import React from 'react';
import { useTheme } from '@emotion/react';

/**
 * imports of components
 */
import Input from '../Input';
/**
 * imports of styles
 */
import { CWrap, SearchBtn } from './Input4Search.styles';
/**
 * imports of constants
 */
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../../utils';

/**
 * Input4Search Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Input4Search: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', value = '', params, onClick, customize = {} } = props;

    //@ts-ignore
    const theme = { ...useTheme().components.Input4Search };
    return (
        <CWrap
            sizeId={sizeId}
            theme={!!customize.container ? mergeThemeObjects(theme.container, customize.container) : theme.container}>
            <Input
                sizeId={sizeId}
                value={value}
                placeholder={params.placeholder}
            />
            <SearchBtn
                sizeId={sizeId}
                onClick={(event) => {
                    if (onClick) onClick(event);
                }}
                theme={
                    !!customize.searchBtn ? mergeThemeObjects(theme.searchBtn, customize.searchBtn) : theme.searchBtn
                }
            />
        </CWrap>
    );
};

export default Input4Search;
