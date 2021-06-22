/**
 * getFraction Function
 * @param {number} value 
 * @returns {number}
 */
export const getFraction = (value: number) => {
    const valueStr = `${value}`;
    if (valueStr.indexOf('.') !== -1) {
        const valueArr = valueStr.split('.');
        return Number(`0.${valueArr[1]}`);
    }
    return 0;
};

export default getFraction;
