/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * imports & exports of namespaces, interfaces & types
 */
import { TSize } from '../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    value?: string;
    maskTpl: any;
    maskOptions?: any;
    customize?: any;
}
/**
 * imports of packages
 */
import React from 'react';
import IMask from 'imask';
import { useTheme } from '@emotion/react';
/**
 * imports of components
 */
import Input from '../Input';

export const InputWithMask: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', value = '', maskTpl, customize = {} } = props;
    const masked = IMask.createMask({
        mask: maskTpl,
    });
    const maskedValue = masked.resolve(value);

    // @ts-ignore
    const theme = { ...useTheme().components.InputWithMask };

    return (
        <>
            <Input customize={customize} sizeId={sizeId} value={maskedValue} />
        </>
    );
};

export default InputWithMask;
