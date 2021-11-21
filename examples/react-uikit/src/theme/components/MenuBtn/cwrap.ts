import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        position: 'absolute',
        height: '50px',
        width: '50px',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            transition: '0.3s',
            transform: 'scale(1.1)',
        },
        '&:active': {
            transition: '0.1s',
            transform: 'scale(1)',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;