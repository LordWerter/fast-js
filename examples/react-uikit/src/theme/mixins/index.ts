import { CSSObject } from "@emotion/serialize";

export const MENU__BTN_WRAP: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
        transition: '0.3s',
        transform: 'scale(1.1)',
    },
};