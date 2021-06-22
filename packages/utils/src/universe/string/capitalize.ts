/**
 * make upper case the first string symbol
 * @param str has string type
 * @returns {string}
 */
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export default capitalize;