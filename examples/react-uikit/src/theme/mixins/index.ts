import { CSSObject } from "@emotion/serialize";

export const MENU__BTN_WRAP: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
        transition: '0.3s',
        transform: 'scale(1.1)',
    },
};

export const MENU__BTN_LINES: CSSObject = {
    borderRadius: '6px',
    height: '6px',
    width: '100%',
    backgroundColor: 'white',
    transition: 'all .3s',
};