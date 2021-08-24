import React from 'react';
import IMask from 'imask';
import { useTheme } from '@emotion/react';
import Input from '../Input';
import { TSize } from '../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    value?: string;
    maskTpl: any;
    maskOptions?: any;
    customize?: any;
}

export const InputWithMask: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', value = '', maskTpl } = props;
    const masked = IMask.createMask({
        mask: maskTpl,
    });
    const maskedValue = masked.resolve(value);

    // @ts-ignore
    const theme = { ...useTheme().components.InputWithMask };

    return (
        <>
            <Input customize={theme} sizeId={sizeId} value={maskedValue} />
        </>
    );
};

export default InputWithMask;
