import cwrap from './cwrap';
import menuButtonSticks from './menuButtonSticks';

export interface ICTheme {
    cwrap: typeof cwrap;
    menuButtonSticks: typeof menuButtonSticks;
}
export const CTheme: ICTheme = {
    cwrap,
    menuButtonSticks,
};

export default CTheme;