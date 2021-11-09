export const blocks = {
    core: {
        position: 'relative',
        top: '150px',
        height: '200px',
        width: '300px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '&>a': {          
            fontSize: '3rem',
            textDecoration: 'none',
            color: 'white',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
}

export default blocks;