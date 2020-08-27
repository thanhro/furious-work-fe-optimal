import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '& > select': {
            padding: '10px',
        },
    },
}));

const SelectorInput = (props) => {
    const classes = useStyles();
    const {
        valueSelected, optionList, onChange, error, helperText,
    } = props;
    const [valueOption, setValueOption] = useState(valueSelected);

    useEffect(() => {
        setValueOption(valueSelected);
    }, [valueSelected]);

    const handleChangeValue = (e) => {
        setValueOption(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <FormControl variant="outlined" className={classes.formControl} fullWidth error={error}>
            <Select
                className={classes.select}
                native
                value={valueOption}
                onChange={(option) => handleChangeValue(option)}
            >
                {Object.keys(optionList).map((key) => (
                    <option value={key} key={key}>{optionList[key]}</option>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};
SelectorInput.defaultProps = {
    error: false,
    helperText: '',
    valueSelected: '',
};

SelectorInput.propTypes = {
    optionList: PropTypes.objectOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    valueSelected: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
};

export default SelectorInput;
