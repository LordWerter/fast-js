import React, { CSSProperties } from 'react';
import { useTheme } from '@emotion/react';
import Button from '../../components/Button';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './ButtonsGroup.styles';

export interface IAdminJob {
    name?: string;
    type?: string;
    force?: string;
    iconId?: string;
    styles?: CSSProperties;
    onClick?: () => any;
}
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    customize?: any;
    data: IAdminJob[];
}

const ButtonsGroup: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, data } = props;
    // @ts-ignore
    const theme = { ...useTheme().containers.ButtonsGroup };
    const requiredThemeKeys = ['container', 'button'];

    requiredThemeKeys.forEach((key: string) => {
        theme[key] = mergeThemeObjects(theme[key], customize[key]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {data &&
                data.map((item: any, index: number): JSX.Element => {
                    const { name, iconId = null, onClick } = item;

                    return (
                        <Button
                            key={index}
                            customize={theme.button}
                            iconId={iconId}
                            text={name}
                            sizeId={sizeId}
                            onClick={onClick}>
                            {name}
                        </Button>
                    );
                })}
        </CWrap>
    );
};

export default ButtonsGroup;
