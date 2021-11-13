export const blocks = {
    core: {
        position: 'relative',
        top: '151px',
        height: '250px',
        width: '300px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '& > a': {          
            fontSize: '3rem',
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
}

export default blocks;