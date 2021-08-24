import React from 'react';
import { useTheme } from '@emotion/react';
import Image from '../Image';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './KeyBtn.styles';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    boardId: string;
    keyCode: string;
    keyValue: string;
    capslock: boolean;
    callback: (keyValue: string) => any;
    sizeId?: TSize;
    customize?: any;
}

export const KeyBtn: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', customize = {}, boardId, keyCode, keyValue, capslock, callback } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.KeyBtn };

    const keyIcons = { ...theme.images };

    let width = 0;

    switch (boardId) {
        case 'ru':
            width = 100 / 12;
            break;
        case 'en':
        case 'symbols':
            width = 10;
            break;
    }

    switch (keyCode) {
        case '16':
        case '8':
            boardId === 'ru' ? (width = 100 / 12 + 100 / 12 / 2) : boardId !== 'symbols' ? (width = 15) : (width = 10);
            break;
        case '1':
        case '0':
            boardId === 'ru' ? (width = 16.6) : (width = 20);
            break;
        case '32':
            boardId === 'ru' ? (width = 67) : (width = 60);
            break;
    }

    return (
        <CWrap
            sizeId={sizeId}
            theme={mergeThemeObjects(theme.container, customize.container)}
            keyWidth={width}
            code={keyValue}
            onClick={() => {
                callback(keyValue);
            }}>
            {keyCode === '16' || keyCode === '8' || keyCode === '0' ? (
                <Image customize={theme.image} bgImage={keyIcons[keyValue]} />
            ) : capslock === true ? (
                keyValue.toUpperCase()
            ) : (
                keyValue
            )}
        </CWrap>
    );
};

export default KeyBtn;
