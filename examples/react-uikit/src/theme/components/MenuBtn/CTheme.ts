import active from './active';
import line from './line';
import nonActive from './non-active';

export interface ICTheme {
    line: typeof line;
    active: typeof active;
    nonActive: typeof nonActive;
}
export const CTheme: ICTheme = {
    line,
    active,
    nonActive,
};

export default CTheme;