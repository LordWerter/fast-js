/**
 * generate 4 symbol sequence as substr part of UUID
 * @returns {string}
 */
export const genRndPart = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

/**
 * generates random UUID 4 outcoming WS messages
 * @returns {string}
 */
export const createUUID = (): string => {
    return `${genRndPart()}${genRndPart()}-${genRndPart()}-${genRndPart()}-${genRndPart()}-${genRndPart()}${genRndPart()}${genRndPart()}`;
};

export default createUUID;
