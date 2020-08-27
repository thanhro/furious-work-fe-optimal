import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Contaner from '@material-ui/core/Container';
import GridContainer from '../Grid/GridContainer';

import styles from '../../assets/jss/components/wrapperContainerStyle';

const useStyles = makeStyles(styles);

const WrapperContainer = (props) => {
    const classes = useStyles(props);
    const {
        children,
        className,
        size,
        ...rest
    } = props;
    return (
        <div className={`${classes.container} ${className}`}>
            <Contaner maxWidth={size}>
                <GridContainer {...rest}>
                    {children}
                </GridContainer>
            </Contaner>
        </div>
    );
};

WrapperContainer.defaultProps = {
    className: '',
    size: 'lg',
};

WrapperContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
};

export default WrapperContainer;
