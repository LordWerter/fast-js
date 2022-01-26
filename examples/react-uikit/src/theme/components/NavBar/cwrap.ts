import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
    core: {
        position: 'absolute',
        top: '76px',
        minWidth: '350px',
        minHeight: "550px",
        borderBottomLeftRadius: '5%',
        borderBottomRightRadius: '5%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 1000,
        '& > a': {          
            fontSize: '3rem',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'white',
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
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;