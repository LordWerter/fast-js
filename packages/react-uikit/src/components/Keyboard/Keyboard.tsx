/**
 * imports & exports of namespaces, interfaces & types
 */
export interface IProps {
    lang: string;
    sizeId?: any;
    customize?: any;
    handleOnKeyPress: (codeValue: string, keyValue: string) => any;
}

/**
 * imports of packages
 */
import React, { useState } from 'react';
import {useTheme} from '@emotion/react';

/**
 * imports of components
 */
import KeyBtn from './KeyBtn';
/**
 * imports of styles
 */
import { CWrap, Board, Row } from './Keyboard.styles';

/**
 * imports of constants
 */
import { default as keysTable } from './lang';
import langRows from './langRows';
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';

/**
 * Keyboard Component
 * @param {Object} props implements IProps
 * @type {Function}
 * @returns {JSX.Element}
 */
export const Keyboard: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, handleOnKeyPress, lang } = props;
    const [activeBoard, setActiveBoard] = useState(lang);
    const [isShift, setIsShift] = useState(false);

    //@ts-ignore
    const theme = { ...useTheme().components.SymbolsKeyboard } || {};
    const keyBtnStyles = mergeThemeObjects(theme.keybtn, customize.keybtn)

    const renderRow = (code, boardId) => {

        switch (code) {
            case '16':
                return (
                    activeBoard !== 'symbols' && (
                        <KeyBtn
                            customize={keyBtnStyles}
                            key={Number(code)}
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
                        customize={keyBtnStyles}
                        key={Number(code)}
                        boardId={boardId}
                        keyCode={code}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={(event) => {
                            handleOnKeyPress(code, keysTable[boardId][code]);
                        }}
                    />
                );
            case '1':
                return (
                    <KeyBtn
                        customize={keyBtnStyles}
                        key={Number(code)}
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
                        customize={keyBtnStyles}
                        key={Number(code)}
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
                        customize={keyBtnStyles}
                        key={Number(code)}
                        keyCode={code}
                        boardId={boardId}
                        keyValue={keysTable[boardId][code]}
                        capslock={isShift}
                        callback={(event) => {
                            handleOnKeyPress(code, keysTable[boardId][code]);
                        }}
                    />
                );
        }
    };

    return (
        <CWrap
            sizeId={sizeId}
            theme={mergeThemeObjects(theme.container, customize.container)}
        >
            {activeBoard === 'ru' && (
                <Board
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard} key={'ru'}>
                    {langRows.ru.map((row, rowInd) => (
                        <Row
                            sizeId={sizeId}
                            theme={mergeThemeObjects(theme.row, customize.row)}
                            key={rowInd}>{row.map((code) => renderRow(code, 'ru'))}</Row>
                    ))}
                </Board>
            )}
            {activeBoard === 'en' && (
                <Board
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard} key={'ru'}>
                    {langRows.en.map((row, rowInd) => (
                        <Row
                            sizeId={sizeId}
                            theme={mergeThemeObjects(theme.row, customize.row)}
                            key={rowInd}>{row.map((code) => renderRow(code, 'en'))}</Row>
                    ))}
                </Board>
            )}
            {activeBoard === 'symbols' && (
                <Board
                    sizeId={sizeId}
                    theme={mergeThemeObjects(theme.board, customize.board)}
                    activeBoard={activeBoard} key={'symbols'}>
                    {langRows.symbols.map((row, rowInd) => (
                        <Row
                            sizeId={sizeId}
                            theme={mergeThemeObjects(theme.row, customize.row)}
                            key={rowInd}>{row.map((code) => renderRow(code, 'symbols'))}</Row>
                    ))}
                </Board>
            )}
        </CWrap>
    );
};

export default Keyboard;
