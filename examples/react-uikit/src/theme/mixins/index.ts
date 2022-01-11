import { CSSObject } from "@emotion/serialize";

export const MENU__BTN_WRAP: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '50px',
    width: '65px',
    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
        transition: '0.3s',
        transform: 'scale(1.1)',
    },
};

export const IMAGE__SLIDES_WRAP: CSSObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    height: '50vh',
    width: '50vw',
    color: 'white',
    fontSize: '3rem',
}