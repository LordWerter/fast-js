import cwrap from './cwrap';
import line from './line';

export interface ICTheme {
    cwrap: typeof cwrap;
    line: typeof line;
}
export const CTheme: ICTheme = {
    cwrap,
    line,
};

export default CTheme;