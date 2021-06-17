/**
 * imports & exports of namespaces, interfaces & types
 */
export interface IProps {
    sizeId?: any;
    customize?: any;
    handleOnClick?: (codeValue: string, keyValue: string) => any;
}

/**
 * imports of packages
 */
import React from 'react';
import {useTheme} from '@emotion/react';
/**
 * imports of components
 */
import Image from '../Image';

/**
 * imports of styles
 */
import { CWrap, Row, Key } from './Number.styles';

/**
 * imports of constants
 */
import numRows from './numRows';
import symbols from './lang/symbols';
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * Number Keyboard Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Number: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, handleOnClick } = props;

    //@ts-ignore
    const theme = { ...useTheme().components.NumbersKeyboard } || {};

    const keyIcons = {...theme.images};

    return (
        <CWrap
            sizeId={sizeId}
            theme={mergeThemeObjects(theme.container, customize.container)}
        >
            {numRows.map((row, rowInd) => (
                <Row
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.row, customize.row)}
                    key={rowInd}>
                    {row.map((code, index) => (
                        <Key
                            sizeId={sizeId}
                            theme={mergeThemeObjects(theme.key, customize.key)}
                            key={index}
                            onClick={() => {
                                const keyValue = symbols[code];
                                const codeValue = code;
                                if (handleOnClick) handleOnClick(codeValue, keyValue);
                            }}>
                            {code === '2' || code === '8' ? (
                                <Image customize={theme.image} bgImage={keyIcons[symbols[code]]} />
                            ) : (
                                symbols[code]
                            )}
                        </Key>
                    ))}
                </Row>
            ))}
        </CWrap>
    );
};

export default Number;
