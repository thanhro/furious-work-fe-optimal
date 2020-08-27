import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { CancelIcon } from '../Icons/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
);

const CleanableInput = memo((props) => {
    const [value, setValue] = useState('');
    const classes = useStyles();
    const {
        label,
        onChange,
        defaultValue,
        isMultiline,
        rows,
        isFullWidth,
        className,
        ...rest
    } = props;

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleClearValue = () => {
        setValue('');
        if (onChange) {
            onChange('');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <FormControl className={`${clsx(classes.margin)} ${className}`} variant="outlined" fullWidth={isFullWidth}>
            <TextField
                label={label}
                variant="outlined"
                type="text"
                value={value}
                onChange={handleChange}
                size="small"
                multiline={isMultiline}
                rows={rows}
                {...rest}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                className={classes.button}
                                aria-label="clear input"
                                onClick={handleClearValue}
                                edge="end"
                                tabIndex={-1}
                            >
                                {!_.isUndefined(value) && <CancelIcon color="#ccc" />}
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
    className: '',
    isMultiline: false,
    rows: 0,
    isFullWidth: true,
};

CleanableInput.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isMultiline: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    rows: PropTypes.number,
    className: PropTypes.string,
};

export default CleanableInput;
