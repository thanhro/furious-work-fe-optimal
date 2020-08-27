import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '../Button/CustomButton';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const stylesAction = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    btn: {
        width: '150px',
    },
});

const DialogActions = withStyles(stylesAction)((props) => {
    const {
        children, classes, onClose, onSubmit, ...other
    } = props;

    return (
        <MuiDialogActions className={classes.root} {...other}>
            <Button
                autoFocus
                gradient
                onClick={onClose}
                size="md"
                color="danger"
                className={classes.btn}
            >
                <FormattedMessage id="cancel" />
            </Button>
            <Button
                autoFocus
                gradient
                onClick={onSubmit}
                size="md"
                color="success"
                className={classes.btn}
            >
                OK
            </Button>
        </MuiDialogActions>
    );
});

export default function AlertDialog({
    title,
    handleClose,
    handleOpen,
    handleSubmit,
    contents,
}) {
    return (
        <div>
            <Dialog
                open={handleOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                style={{ zIndex: '1301' }}
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {contents}
                    </DialogContentText>
                </DialogContent>
                <DialogActions onClose={handleClose} onSubmit={handleSubmit} />
            </Dialog>
        </div>
    );
}

AlertDialog.defaultProps = {
    title: <FormattedMessage id="confirm" />,
    handleOpen: false,
    contents: 'Alert Dialog Contents',
};

AlertDialog.propTypes = {
    title: PropTypes.node,
    handleClose: PropTypes.func.isRequired,
    handleOpen: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    contents: PropTypes.node,
};
