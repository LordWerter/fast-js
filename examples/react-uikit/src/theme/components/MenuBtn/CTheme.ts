import active from './active';
import cwrap from './cwrap';
import line from './line';
import nonActive from './non-active';

export interface ICTheme {
    cwrap: typeof cwrap;
    line: typeof line;
    active: typeof active;
    nonActive: typeof nonActive;
}
export const CTheme: ICTheme = {
    cwrap,
    line,
    active,
    nonActive,
};

export default CTheme;