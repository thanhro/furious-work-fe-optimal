import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import _ from 'lodash';

const Icon = (props) => {
    const { path, ...rest } = props;
    return (
        <SvgIcon {...rest}>
            {_.isArray(path) ? path.map((p) => <path d={p} />) : <path d={path} />}
        </SvgIcon>
    );
};

Icon.propTypes = {
    path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default Icon;
