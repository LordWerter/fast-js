import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        position: 'absolute',
        bottom: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        transition: 'bottom ease-in-out 0.3s',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;