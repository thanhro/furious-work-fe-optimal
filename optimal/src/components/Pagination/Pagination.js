import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Pagination from '@material-ui/lab/Pagination';

const PaginationCustom = (props) => {
    const {
        page, total, onChange,
    } = props;

    const [pageState, setPageState] = useState(0);

    useMemo(() => {
        setPageState(page);
    }, [page]);

    const onChangePage = (currentPage) => {
        setPageState(currentPage);
        if (onChange) {
            onChange(currentPage);
        }
    };

    return (
        <Box display="flex" justifyContent="center" paddingBottom={2.5} paddingTop={2.5}>
            <Hidden mdUp>
                <Pagination
                    size="large"
                    page={pageState}
                    siblingCount={0}
                    count={total}
                    variant="outlined"
                    color="primary"
                    onChange={(event, currentPage) => onChangePage(currentPage)}
                />
            </Hidden>
            <Hidden smDown>
                <Pagination
                    size="large"
                    page={pageState}
                    count={total}
                    variant="outlined"
                    color="primary"
                    onChange={(event, currentPage) => onChangePage(currentPage)}
                />
            </Hidden>
        </Box>
    );
};

PaginationCustom.defaultProps = {
    page: 1,
    total: 0,
};

PaginationCustom.propTypes = {
    page: PropTypes.number,
    total: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default PaginationCustom;