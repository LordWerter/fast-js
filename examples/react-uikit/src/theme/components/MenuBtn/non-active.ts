import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_KEYFRAMES, MENU__BTN_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        ...MENU__BTN_KEYFRAMES,
        '& > div :nth-child(1)': {
            animation: 'ease .7s top-2 forwards',
        },
        '& > div :nth-child(2)': {
            animation: 'ease .7s zoom-in forwards',
        },
        '& > div :nth-child(3)': {
            animation: 'ease .7s bottom-2 forwards',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;