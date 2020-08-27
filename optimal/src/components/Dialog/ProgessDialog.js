import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '../Typography/CustomTypography';

const useStyles = makeStyles({
    root: {
        height: 10,
        borderRadius: 5,
    },
});

function LinearProgressWithLabel(props) {
    const { value } = props;
    const classes = useStyles();
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} classes={{ root: classes.root }} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="info">
                    {`${value}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const ProgessDialog = (props) => {
    const {
        isOpen,
        percent,
    } = props;
    return (
        <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-title-progess"
            aria-describedby="alert-dialog-description-progess"
        >
            <DialogTitle id="alert-dialog-title-progess">
                <Typography>
                    アップロード中ですので、しばらくお待ちをください。
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description-progess">
                    <LinearProgressWithLabel value={percent} />
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

LinearProgressWithLabel.defaultProps = {
    value: 0,
};

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number,
};

ProgessDialog.defaultProps = {
    percent: 0,
    isOpen: false,
};

ProgessDialog.propTypes = {
    isOpen: PropTypes.bool,
    percent: PropTypes.number,
};

export default ProgessDialog;
