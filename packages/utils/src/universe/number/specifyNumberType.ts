export const isNaN = (value: number): boolean => Number.isNaN(value);
export const isFinite = (value: number): boolean => Number.isFinite(value);

/**
 * specifyNumberType Function
 * @param {number} target
 * @returns {'NaN' | 'Infinity' | 'Integer' | 'Float'}
 */
export const specifyNumberType = (target: number) =>
    isNaN(target) ? 'NaN' 
        : isFinite(target) ? 'Infinity' 
            : Math.trunc(target) === target ? 'Integer' : 'Float';

export default specifyNumberType;
