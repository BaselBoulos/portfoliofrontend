import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    navbarMenu: {
        width: 250,
        background: '#511',
        height: '100%',
    },
    navbarAvatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: 'tan',
    },
    headerAvatar: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        margin: theme.spacing(1),
    },
    headerTitle: {
        color: 'tomato'
    },
    headerSubtitle: {
        color: 'tan',
        marginBottom: '1rem'
    },
    boxContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    },
    particlesCanvas: {
        position: 'absolute',
        opacity: '0.3'
    },
    cvMainContainer: {
        background: '#233'
    },
    cvTimeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: '''',
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0,
        },
        '&:after': {
            content: '''',
            display: 'table',
            clear: 'both',
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    cvTimeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: '',
            position: 'absolute',
        },
        '&:before': {
            content: '',
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50%-5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            width: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    cvTimeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto',
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    cvHeading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    cvSubHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    },
    portfolioMainContainer: {
        background: '#233',
        height: '100%',
    },
    portfolioCardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    },
    portfolioCardContent: {
        textAlign: 'center'
    },
    portfolioCardButtons: {
        padding: 0,
        alignItems: 'center',
    },
   
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    },
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250,
            padding: 0,
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem',
            }
        }
    },
    aboutBoxContainer: {
        background: '#233',
        height: '100vh',
        textAlign: 'center',
    },
    aboutHeaderTitle: {
        color: 'tomato',
        textAlign: 'center',
    },
    aboutHeaderSubtitle: {
        color: 'tan',
        textAlign: 'center'
    },
    contactContainer: {
        background: '#233',
        height: '100vh',
    },
    contactTypography:{
        color: 'tomato',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    cvContainer:{
        background: '#233',
        height: '100vh',
    },
    aboutButton: {
        backgroundColor: '#ff6347',
        textDecoration: 'inherit',
    }
}));
export {useStyles};

