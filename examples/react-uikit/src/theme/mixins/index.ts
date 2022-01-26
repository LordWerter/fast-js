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

export const IMG_WRAP: CSSObject = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity ease-in-out 0.3s',
};

export const ARROW_WRAP: CSSObject = {
    position: 'absolute',
    width: '5vw',
    height: '100%',
    zIndex: 100,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const DOTS: CSSObject = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '3px solid #f1f1f1',
    margin: '0 1vw',
    background: '#f1f1f1',
    cursor: 'pointer',
};