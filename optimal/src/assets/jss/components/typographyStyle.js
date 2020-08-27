import {
    primaryColor,
    infoColor,
    warningColor,
    dangerColor,
    successColor,
    roseColor,
    grayColor,
    whiteColor,
} from '../global';

const typographyStyle = {
    default: {
        color: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
        color: primaryColor,
    },
    info: {
        color: infoColor,
    },
    warning: {
        color: warningColor,
    },
    danger: {
        color: dangerColor,
    },
    success: {
        color: successColor,
    },
    rose: {
        color: roseColor,
    },
    gray: {
        color: grayColor,
    },
    bold: {
        fontWeight: 700,
    },
    inherit: {
        color: 'inherit',
    },
    white: {
        color: whiteColor,
    },
    root: {
        wordBreak: 'break-all',
        whiteSpace: 'pre-line',
    },
};

export default typographyStyle;
