import React, {
    useState, memo, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        marginLeft: 0,
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    button: {
        padding: theme.spacing(1),
    },
}));

const areEqual = (prevProps, nextProps) => (
    prevProps.defaultValue === nextProps.defaultValue
    && prevProps.error === nextProps.error
    && prevProps.helperText === nextProps.helperText
    && prevProps.type === nextProps.type
);

const CleanableInput = memo((props) => {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const classes = useStyles();
    const {
        label,
        onChange,
        defaultValue,
        children,
        adornment,
        size,
        onClick,
        position,
        edge,
        className,
        ...rest
    } = props;

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (
        <FormControl className={`${clsx(classes.margin)} ${className}`} variant="outlined">
            <TextField
                ref={inputRef}
                label={label}
                variant="outlined"
                type="text"
                value={value || defaultValue}
                onChange={handleChange}
                size={size}
                {...rest}
                InputProps={{
                    [adornment]: (
                        <InputAdornment position={position}>
                            <IconButton
                                className={classes.button}
                                aria-label="input"
                                onClick={handleClick}
                                edge={edge}
                                tabIndex={-1}
                            >
                                {children}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </FormControl>
    );
}, areEqual);

CleanableInput.defaultProps = {
    label: '',
    defaultValue: '',
    adornment: 'endAdornment',
    size: '',
    position: 'end',
    edge: 'end',
    className: '',
};

CleanableInput.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    adornment: PropTypes.oneOf(['endAdornment', 'startAdornment']),
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    position: PropTypes.string,
    edge: PropTypes.string,
    className: PropTypes.string,
};

export default CleanableInput;
