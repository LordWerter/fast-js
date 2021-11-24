import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        marginTop: '5vh',
        marginBottom: '5vh',
        fontSize: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h1': {
            textAlign: 'center',
            fontSize: '7rem',
        },
        '& > p': {
            textAlign: 'justify',
            marginTop: '50px',
            width: '80%',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;