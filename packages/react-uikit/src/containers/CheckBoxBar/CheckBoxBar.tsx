/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/**
 * imports & exports of namespaces, interfaces & types
 */
export interface ICheckBox {
    name: string;
    styles?: CSSProperties;
    handleOnChange?: any;
}
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    data?: any[];
}

/**
 * imports of packages
 */
import React, { CSSProperties } from 'react';
import { useTheme } from '@emotion/react';
/**
 * imports of components
 */
import CheckBox from '../../components/Checkbox';
/**
 * imports of styles
 */
import { CWrap } from './CheckBoxBar.styles';
/**
 * imports of constants
 */
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

/**
 * CheckBoxBar Component
 * @param {Object} props implements IProps
 * @type {React.FC<IProps>}
 * @returns {JSX.Element}
 */
const CheckBoxBar: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, data } = props;

    // @ts-ignore
    const theme = { ...useTheme().containers.CheckBoxBar } || {};

    return (
        <CWrap sizeId={sizeId} theme={mergeThemeObjects(theme.container, customize.container)}>
            {data &&
                data.map((item: any, index: number): JSX.Element => {
                    const { hash, label, handleOnChange } = item;
                    return (
                        <CheckBox
                            key={index}
                            hash={hash}
                            sizeId={sizeId}
                            label={label}
                            customize={theme.checkbox}
                            onChange={() => {
                                handleOnChange();
                            }}
                        />
                    );
                })}
        </CWrap>
    );
};

export default CheckBoxBar;
