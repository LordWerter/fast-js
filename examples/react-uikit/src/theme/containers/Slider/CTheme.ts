import cwrap from './cwrap';
import leftarrow from './leftarrow';
import rightarrow from './rightarrow';
import slide from './slide';
import sliderwrap from './sliderwrap';
import track from './track';

export interface ICTheme {
    cwrap: typeof cwrap;
    leftarrow: typeof leftarrow;
    rightarrow: typeof rightarrow;
    slide: typeof slide;
    sliderwrap: typeof sliderwrap;
    track: typeof track;
}

export const CTheme: ICTheme = {
    cwrap,
    leftarrow,
    rightarrow,
    slide,
    sliderwrap,
    track,
};

export default CTheme;