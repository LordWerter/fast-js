// import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";

export const blocks = {
    core: {
        ...MENU__BTN_WRAP,
        '.div :nth-child(1)': {
            animation: 'ease .7s top-2 forwards',
        },
        '.div :nth-child(2)': {
            animation: 'ease .7s zoom-in forwards',
        },
        '.div :nth-child(3)': {
            animation: 'ease .7s bottom-2 forwards',
        },
        '@keyframes top-2': {
            '0%': {
                top: '22px',
                transform: 'rotate(135deg)',
            },
            '50%': {
                top: '22px',
                transform: 'rotate(0deg)',
            },
            '100%': {
                top: 0,
                transform: 'rotate(0deg)',
            },
        },
        '@keyframes zoom-in': {
            '0%': {
                transform: 'scale(0)',
            },
            '50%': {
                transform: 'scale(0)',
            },
            '100%': {
                transform: 'scale(1)',
            },
        },
        '@keyframes bottom-2': {
            '0%': {
                bottom: '22px',
                transform: 'rotate(45deg)',
            },
            '50%': {
                bottom: '22px',
                transform: 'rotate(0)',
            },
            '100%': {
                bottom: 0,
                transform: 'rotate(0)',
            },
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;