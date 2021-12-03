import { keyframes } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";

export const MENU__BTN_WRAP: CSSObject = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    // transition: '0.3s',
    // ':hover': {
    //     transition: '0.3s',
    //     transform: 'scale(1.1)',
    // },
};

export const MENU__BTN_LINES: CSSObject = {
    position: 'relative',
    display: 'block',
    borderRadius: '6px',
    height: '6px',
    width: '100%',
    backgroundColor: 'white',
    transition: 'all .3s',
    margin: '10% 0',        
};

export const MENU__BTN_KEYFRAMES: CSSObject = {
    'top': keyframes({
        '0%': {
            top: '0',
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
    }),
    'top-2': keyframes({
        '0%': {
            top: '22px',
            transform: 'rotate(135deg)',
        },
        '50%': {
            top: '22px',
            transform: 'rotate(0deg)',
        },
        '100%': {
            top: '0',
            transform: 'rotate(0deg)',
        },
    }),
    'zoom-out': keyframes({
        '50%': {
            transform: 'scale(0)',
        },
        '100%': {
            transform: 'scale(0)',
        },
    }),
    'zoom-in': keyframes({
        '0%': {
            transform: 'scale(0)',
        },
        '50%': {
            transform: 'scale(0)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    }),
    'bottom': keyframes({
        '0%': {
            bottom: '0',
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
    }),
    'bottom-2': keyframes({
        '0%': {
            bottom: '22px',
            transform: 'rotate(45deg)',
        },
        '50%': {
            bottom: '22px',
            transform: 'rotate(0)',
        },
        '100%': {
            bottom: '0',
            transform: 'rotate(0)',
        },
    }),
};