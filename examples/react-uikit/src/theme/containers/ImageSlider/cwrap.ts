import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        borderRadius: '10px',
        height: '60vh',
        width: '60vw',
        overflow: 'hidden',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;