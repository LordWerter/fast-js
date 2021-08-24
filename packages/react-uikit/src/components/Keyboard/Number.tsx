import React from 'react';
import { useTheme } from '@emotion/react';
import Image from '../Image';
import { CWrap, Row, Key } from './Number.styles';
import numRows from './numRows';
import symbols from './lang/symbols';
import { mergeThemeObjects } from '../../utils';

export interface IProps {
    sizeId?: any;
    customize?: any;
    handleOnClick?: (codeValue: string, keyValue: string) => any;
}

export const Number: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, handleOnClick } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.NumbersKeyboard };

    const keyIcons = { ...theme.images };

    return (
        <CWrap sizeId={sizeId} theme={mergeThemeObjects(theme.container, customize.container)}>
            {numRows.map((row, rowInd) => (
                <Row key={rowInd} sizeId={sizeId} theme={mergeThemeObjects(theme.row, customize.row)}>
                    {row.map((code, index) => (
                        <Key
                            key={index}
                            sizeId={sizeId}
                            theme={mergeThemeObjects(theme.key, customize.key)}
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
