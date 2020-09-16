import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    transition,
    boxShadow,
    drawerWidth,
    blackColor,
} from '../global';

const userHeaderStyle = (theme) => ({
    appBar: {
        // fix cung header
        top: '0px',
        left: '0px',
        right: '0px',
        // position: 'fixed !important',
        // fix cung header
        // top: '0',
        position: 'sticky',
        display: 'flex',
        border: '0',
        // padding: '24px 0',
        color: '#555',
        width: '100%',
        // backgroundColor: '#fff',
        backgroundColor: '#f2f2fe',
        boxShadow: '0px 10px 18px rgba(85, 114, 187, 0.4)',
        transition: 'all 150ms ease 0s',
        alignItems: 'center',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        zIndex: '10',
        borderBottom: '1px solid #ddd',
    },
    logo_header: {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
    },
    wrapper: {
        backgroundColor: '#fff',
    },
    absolute: {
        position: 'absolute',
        zIndex: '1100',
    },
    fixed: {
        position: 'fixed',
        zIndex: '1100',
    },
    container: {
        minHeight: '50px',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'nowrap',
    },
    flex: {
        flex: 1,
    },
    title: {
        ...defaultFont,
        height: '50px',
        lineHeight: '30px',
        fontSize: '30px',
        borderRadius: '3px',
        textTransform: 'none',
        color: 'inherit',
        padding: 0,
        letterSpacing: 'unset',
        '&:hover,&:focus': {
            color: 'inherit',
            background: 'transparent',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
        },
    },
    appResponsive: {
        width: '100%',
    },
    primary: {
        backgroundColor: primaryColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)',
    },
    info: {
        backgroundColor: infoColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
    },
    success: {
        backgroundColor: successColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)',
    },
    warning: {
        backgroundColor: warningColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)',
    },
    danger: {
        backgroundColor: dangerColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)',
    },
    rose: {
        backgroundColor: roseColor,
        color: '#FFFFFF',
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)',
    },
    transparent: {
        backgroundColor: 'transparent !important',
        boxShadow: 'none',
        paddingTop: '25px',
        color: '#FFFFFF',
    },
    dark: {
        color: '#FFFFFF',
        backgroundColor: `${blackColor} !important`,
        boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
    },
    white: {
        border: '0',
        color: '#555',
        backgroundColor: '#fff !important',
        boxShadow:
        '0px 10px 18px rgba(85, 114, 187, 0.4)',
    },
    drawerPaper: {
        border: 'none',
        bottom: '0',
        transitionProperty: 'top, bottom, width',
        transitionDuration: '.2s, .2s, .35s',
        transitionTimingFunction: 'linear, linear, ease',
        width: drawerWidth,
        ...boxShadow,
        position: 'fixed',
        display: 'block',
        top: '0',
        height: '100vh',
        right: '0',
        left: 'auto',
        visibility: 'visible',
        overflowY: 'visible',
        borderTop: 'none',
        textAlign: 'left',
        paddingRight: '0px',
        paddingLeft: '0',
        ...transition,
    },
    wrapperInner: {
        borderTop: '1px solid #ddd',
        marginTop: '8px',
    },
    left: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
        },
    },
    gridLeft: {
        '@media (min-width: 960px) and (max-width: 1200px)': {
            maxWidth: '60%',
        },
    },
    gridRight: {
        paddingLeft: 0,
        '@media (min-width: 960px) and (max-width: 1200px)': {
            maxWidth: '40%',
        },
    },
    lb: {
        width: '120px',
        height: '50px',
    },
    brand: {
        cursor: 'pointer',
        fontSize: '45px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
    brandMobile: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0',
            paddingRight: '0',
        },
    },
    footer: {
        marginTop: '100px',
        bottom: '0',
        display: 'flex',
        border: '0',
        padding: '24px 0',
        color: '#555',
        width: '100%',
        // backgroundColor: '#fff',
        backgroundColor: '#f2f2fe',
        boxShadow: '0 -5px 18px -5px rgba(85, 114, 187, 0.4);',
        transition: 'all 150ms ease 0s',
        alignItems: 'center',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        zIndex: '10',
        borderBottom: '1px solid #ddd',
    },
    footerItems: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    logo_brand: {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        padding: '9px 10px',
        border: '1px solid #ffb74d',
        borderRadius: '30px !important',
        margin: '0 5px',
        textDecoration: 'none',
    },
    list: {
        fontSize: '14px',
        margin: 0,
        paddingLeft: '0',
        listStyle: 'none',
        paddingTop: '0',
        paddingBottom: '0',
        color: 'inherit',
    },
    listItem: {
        float: 'left',
        color: 'inherit',
        position: 'relative',
        display: 'block',
        width: 'auto',
        margin: '0',
        padding: '0',
    },
});

export default userHeaderStyle;
