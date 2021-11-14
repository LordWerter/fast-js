/**
 * gens full params from array. Example is here - ['FirstName=John', 'LastName=Do'] to { FirstName: 'John', LastName: 'Do', }
 * Usage: genObjectFromPairsArr(['FirstName=John', 'LastName=Do'], '=') => Output will be { FirstName: 'John', LastName: 'Do', }
 * @param { string[] } arr 
 * @param { string } separator 
 * @returns { [key: string]: string | unknown }
 */
export const genObjectFromPairsArr = (arr: string[], separator: string): { [key: string]: string } => {
    const result: { [key: string]: string } = {};
    arr.forEach((pair) => {
        const pairArr: string[] = pair.split(separator);
        result[pairArr[0]] = pairArr[1];
    });

    return result;
};

export default genObjectFromPairsArr;
