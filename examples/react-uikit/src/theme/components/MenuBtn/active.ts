// import { TCSSObjProps } from "../../../definitions";
import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_KEYFRAMES, MENU__BTN_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        ...MENU__BTN_KEYFRAMES,
        '& > div :nth-child(1)': {
            animation: 'ease .7s top forwards',
        },
        '& > div :nth-child(2)': {
            animation: 'ease .7s zoom-out forwards',
        },
        '& > div :nth-child(3)': {
            animation: 'ease .7s bottom forwards',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;