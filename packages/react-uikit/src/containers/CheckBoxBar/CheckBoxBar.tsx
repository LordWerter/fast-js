import React, { CSSProperties } from 'react';
import { useTheme } from '@emotion/react';
import CheckBox from '../../components/Checkbox';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './CheckBoxBar.styles';

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

const CheckBoxBar: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, data } = props;

    // @ts-ignore
    const theme = { ...useTheme().containers.CheckBoxBar };

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
