import cwrap from './cwrap'
import hidden from './hidden';
import line from './line';

export interface ICTheme {
    cwrap: typeof cwrap;
    hidden: typeof hidden;
    line: typeof line;
}

export const CTheme: ICTheme = {
    cwrap,
    hidden,
    line,
};

export default CTheme;