/**
 * butify Number via dividing a numeric entry into digits
 * @param {number} input
 * @returns {string}
 * @type {Function}
 */
export const butifyNumber = (input: number): string => {
    const parts: Array<string> = input.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
};

export default butifyNumber;
