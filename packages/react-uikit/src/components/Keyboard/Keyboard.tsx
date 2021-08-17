/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
export interface IProps {
    lang: string;
    sizeId?: any;
    customize?: any;
    handleOnKeyPress: (codeValue: string, keyValue: string) => any;
}

import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import KeyBtn from './KeyBtn';
import { CWrap, Board, Row } from './Keyboard.styles';
import { default as keysTable } from './lang';
import langRows from './langRows';
import { mergeThemeObjects } from '../../utils';

export const Keyboard: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, handleOnKeyPress, lang } = props;
    const [activeBoard, setActiveBoard] = useState(lang);
    const [isShift, setIsShift] = useState(false);

    // @ts-ignore
    const theme = { ...useTheme().components.SymbolsKeyboard };
    const keyBtnStyles = mergeThemeObjects(theme.keybtn, customize.keybtn);

    const renderRow = (code: string, boardId: string) => {
        switch (code) {
            case '16':
                return (
                    activeBoard !== 'symbols' && (
                        <KeyBtn
                            key={Number(code)}
                            customize={keyBtnStyles}
                            boardId={boardId}
                            keyCode={code}
                            keyValue={keysTable[boardId][code]}
                            capslock={isShift}
                            callback={() => {
                                setIsShift(!isShift);
                            }}
                        />
                    )
                );
            case '8':
                return (
                    <KeyBtn
                        key={Number(code)}
                        customize={keyBtnStyles}
                        boardId={boardId}
                        keyCode={code}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={() => {
                            handleOnKeyPress(code, keysTable[boardId][code]);
                        }}
                    />
                );
            case '1':
                return (
                    <KeyBtn
                        key={Number(code)}
                        customize={keyBtnStyles}
                        boardId={boardId}
                        keyCode={code}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={() => {
                            setActiveBoard('symbols');
                        }}
                    />
                );
            case '0':
                return (
                    <KeyBtn
                        key={Number(code)}
                        customize={keyBtnStyles}
                        boardId={boardId}
                        keyCode={code}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={() => {
                            return activeBoard === 'symbols'
                                ? setActiveBoard('ru')
                                : activeBoard === 'ru'
                                ? setActiveBoard('en')
                                : setActiveBoard('ru');
                        }}
                    />
                );
            default:
                return (
                    <KeyBtn
                        key={Number(code)}
                        customize={keyBtnStyles}
                        keyCode={code}
                        boardId={boardId}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={() => {
                            handleOnKeyPress(code, keysTable[boardId][code]);
                        }}
                    />
                );
        }
    };

    return (
        <CWrap sizeId={sizeId} theme={mergeThemeObjects(theme.container, customize.container)}>
            {activeBoard === 'ru' && (
                <Board
                    key={'ru'}
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard}>
                    {langRows.ru.map((row, rowInd) => (
                        <Row key={rowInd} sizeId={sizeId} theme={mergeThemeObjects(theme.row, customize.row)}>
                            {row.map((code) => renderRow(code, 'ru'))}
                        </Row>
                    ))}
                </Board>
            )}
            {activeBoard === 'en' && (
                <Board
                    key={'ru'}
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard}>
                    {langRows.en.map((row, rowInd) => (
                        <Row key={rowInd} sizeId={sizeId} theme={mergeThemeObjects(theme.row, customize.row)}>
                            {row.map((code) => renderRow(code, 'en'))}
                        </Row>
                    ))}
                </Board>
            )}
            {activeBoard === 'symbols' && (
                <Board
                    key={'symbols'}
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard}>
                    {langRows.symbols.map((row, rowInd) => (
                        <Row key={rowInd} sizeId={sizeId} theme={mergeThemeObjects(theme.row, customize.row)}>
                            {row.map((code) => renderRow(code, 'symbols'))}
                        </Row>
                    ))}
                </Board>
            )}
        </CWrap>
    );
};

export default Keyboard;
