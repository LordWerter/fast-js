import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        marginTop: '100px',
        fontSize: '3rem',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        '& > h1': {
            textAlign: 'center',
            fontSize: '7rem',
        },
        '& > p': {
            textAlign: 'justify',
            marginTop: '50px',
            marginBottom: '50px',
        }
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;