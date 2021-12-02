// import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";

export const blocks = {
    core: {
        ...MENU__BTN_WRAP,
        '.div:nth-child(1)': {
            animation: 'ease .7s top forwards',
        },
        '.div:nth-child(2)': {
            animation: 'ease .7s zoom-out forwards',
        },
        '.div:nth-child(3)': {
            animation: 'ease .7s bottom forwards',
        },
        '@keyframes top': {
            '0%': {
                top: 0,
                transform: 'rotate(0)',
            },
            '50%': {
                top: '22px',
                transform: 'rotate(0)',
            },
            '100%': {
                top: '26px',
                transform: 'rotate(135deg)',
            },
        },
        '@keyframes zoom-out': {
            '50%': {
                transform: 'scale(0)',
            },
            '100%': {
                transform: 'scale(0)',
            },
        },
        '@keyframes bottom': {
            '0%': {
                bottom: 0,
                transform: 'rotate(0)',
            },
            '50%': {
                bottom: '22px',
                transform: 'rotate(0)',
            },
            '100%': {
                bottom: '23px',
                transform: 'rotate(45deg)',
            },
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;