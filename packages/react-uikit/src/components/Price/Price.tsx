/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import { TSize } from '../../definitions/IPropTypes';
import React from 'react';
import { useTheme } from '@emotion/react';

export interface IProps {
    value: any;
    config?: any;
    sizeId?: TSize;
    customize?: any;
    caseName?: string; // for debug only
}

import { CWrap, IntValue, Delimiter, FractionValue, Сurrency, Line } from './Price.styles';
import currencies from './currencies';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

export const Price: React.FC<IProps> = (props): JSX.Element => {
    const {
        value = 0,
        config = { type: 'default', delimiter: 'none', lang: 'ru' },
        sizeId = 'xl',
        customize = {},
    } = props;

    const requiredThemeKeys = [
        'config',
        'container',
        'integer',
        'delimiter',
        'fraction',
        'currency',
        'line',
        'lineStyles',
        'lineDecorations',
    ];

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Price } || {};
    for (const key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    const roundToN = function (value: number, n: number) {
        return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
    };

    const getFractionDigits = (value: number) => {
        const targetArr: string[] = `${roundToN(value, 2)}`.split('.');
        return targetArr.length === 1 ? '00' : targetArr[1].length === 1 ? `${targetArr[1]}0` : targetArr[1];
    };

    const intValue = `${value}`.split('.')[0];
    const fractionValue = getFractionDigits(value);

    const targetDecoration = mergeThemeObjects(
        theme.lineDecorations[theme.config.decoration],
        theme.lineStyles[theme.config.lineStyle]
    );

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            {config.type === 'default' ? (
                <IntValue sizeId={sizeId} theme={theme.integer}>
                    {value}
                </IntValue>
            ) : (
                <>
                    <IntValue sizeId={sizeId} theme={theme.integer}>
                        {intValue}
                    </IntValue>
                    {config.type === 'noDelimiter' ? (
                        <></>
                    ) : (
                        <Delimiter sizeId={sizeId} theme={theme.delimiter}>
                            {config.delimiter === 'dot' ? '.' : ','}
                        </Delimiter>
                    )}
                    {theme.config.showFraction !== 'always' ? (
                        <FractionValue sizeId={sizeId} theme={theme.fraction}>
                            {fractionValue}
                        </FractionValue>
                    ) : theme.config.showFraction !== 'notZero' && Number(fractionValue) > 0 ? (
                        <FractionValue sizeId={sizeId} theme={theme.fraction}>
                            {fractionValue}
                        </FractionValue>
                    ) : (
                        <></>
                    )}
                </>
            )}
            <Сurrency sizeId={sizeId} theme={theme.currency}>
                {currencies[config.lang]}
            </Сurrency>
            {theme.config.decoration !== 'none' ? (
                <Line sizeId={sizeId} theme={mergeThemeObjects(theme.line, targetDecoration)} />
            ) : (
                <></>
            )}
        </CWrap>
    );
};

export default Price;
