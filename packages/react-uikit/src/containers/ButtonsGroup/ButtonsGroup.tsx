/**
 * imports & exports of namespaces, interfaces & types
 */
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

/**
 * imports of packages
 */
import React, { CSSProperties } from 'react';
import {useTheme} from '@emotion/react';

/**
 * imports of components
 */
import Button from '../../components/Button';
/**
 * imports of styles
 */
import { CWrap } from './ButtonsGroup.styles';

/**
 * imports of constants
 */
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * Service Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
const ButtonsGroup: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, data } = props;
    //@ts-ignore
    const theme = { ...useTheme().containers.ButtonsGroup } || {};
    const requiredThemeKeys = [
        'container', 'button'
    ];

    for (let key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
        >
            {data &&
                data.map(
                    (item: any, index: number): JSX.Element => {
                        const { name, iconId = null, onClick } = item;

                        return (
                            <Button
                                customize={theme.button}
                                key={index} iconId={iconId} text={name} sizeId={sizeId} onClick={onClick}>
                                {name}
                            </Button>
                        );
                    }
                )}
        </CWrap>
    );
};

export default ButtonsGroup;
