/**
 * imports & exports of namespaces, interfaces & types
 */

export interface IProps {
    sizeId?: any;
    customize?: any;
    productCode: string;
    count: number;
    handleMinusCount: (productCode: string) => any;
    handlePlusCount: (productCode: string) => any;
}

/**
 * imports of packages
 */
import React from 'react';
import {useTheme} from '@emotion/react';
/**
 * imports of components
 */

/**
 * imports of styles
 */
import { CWrap, Value, Btn } from './Counter.styles';

/**
 * imports of constants
 */
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * Counter Component
 * @param props implements IProps
 * @description renders Counter
 */
export const Counter: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, count, productCode, handleMinusCount, handlePlusCount } = props;
    //@ts-ignore
    const theme = { ...useTheme().components.Counter } || {};
    const requiredThemeKeys = [
        'container', 'button', 'value', 'images'
    ];
    for (let key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={mergeThemeObjects(theme.container, customize.container)}
        >
            <Btn
                sizeId={sizeId}
                theme={mergeThemeObjects(theme.button, customize.button)}
                style={{
                    backgroundImage: `url('${theme.images.minus}')`,
                }}
                onClick={() => {
                    handleMinusCount(productCode);
                }} />
            <Value
                sizeId={sizeId}
                theme={mergeThemeObjects(theme.value, customize.value)}
            >{count}</Value>
            <Btn
                sizeId={sizeId}
                theme={mergeThemeObjects(theme.button, customize.button)}
                style={{
                    backgroundImage: `url('${theme.images.plus}')`,
                }}
                onClick={() => {
                    handlePlusCount(productCode);
                }} />
        </CWrap>
    );
};

export default Counter;
