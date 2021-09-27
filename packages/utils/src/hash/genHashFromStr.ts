/**
 * genHashFromStr method that help to gen hash from any string. Recomend to use time stamp as a string
 * @param {number} input
 * @returns {string}
 * @type {Function}
 */

export const genHashFromStr = (s: string) => {
    return s.split('').reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);
};

export default genHashFromStr;
