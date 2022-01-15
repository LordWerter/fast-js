import cwrap from './cwrap'
import leftarrow from './leftarrow'
import rightarrow from './rightarrow'
import slide from './slide'
import track from './track'

export interface ICTheme {
    cwrap: typeof cwrap;
    leftarrow: typeof leftarrow;
    rightarrow: typeof rightarrow;
    slide: typeof slide;
    track: typeof track;
}

export const CTheme: ICTheme = {
    cwrap,
    leftarrow,
    rightarrow,
    slide,
    track,
};

export default CTheme;