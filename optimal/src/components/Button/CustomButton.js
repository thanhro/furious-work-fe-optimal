import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from '../../assets/jss/components/customButtonStyle';

const useStyles = makeStyles(styles);

const CustomButton = forwardRef((props, ref) => {
    const {
        color,
        size,
        round,
        className,
        children,
        disabled,
        simple,
        border,
        gradient,
        gradientBorder,
        ...rest
    } = props;
    const classes = useStyles();
    const btnClasses = classNames({
        [classes.button]: true,
        [className]: className,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.simple]: simple,
        [classes.border]: border,
        [classes.disabled]: disabled,
        [classes.gradient]: gradient,
        [classes.gradientBorder]: gradientBorder,
        [className]: className,
    });

    return (
        <Button {...rest} ref={ref} className={btnClasses}>
            {children}
        </Button>
    );
});

CustomButton.defaultProps = {
    color: 'primary',
    size: 'sm',
    round: false,
    simple: false,
    border: false,
    disabled: false,
    gradient: false,
    gradientBorder: false,
    className: '',
    children: undefined,
};

CustomButton.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'rose',
        'white',
        'transparent',
    ]),
    size: PropTypes.oneOf([
        'xs',
        'sm',
        'lg',
        'md',
    ]),
    round: PropTypes.bool,
    simple: PropTypes.bool,
    border: PropTypes.bool,
    disabled: PropTypes.bool,
    gradient: PropTypes.bool,
    gradientBorder: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default CustomButton;
