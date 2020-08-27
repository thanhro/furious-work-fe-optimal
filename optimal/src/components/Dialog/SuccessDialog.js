import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '../Button/CustomButton';
import GridContainer from '../Grid/GridContainer';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
const useStyles = makeStyles(() => ({
    marginBottom20: {
        marginBottom: 20,
    },
    textCenter: {
        textAlign: 'center',
    },
}));
export default function SuccessDialog(props) {
    const {
        title,
        handleClose,
        open,
        contents,
    } = props;
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                className={classes.textCenter}
            >
                <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {contents}
                    </DialogContentText>
                </DialogContent>
                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.marginBottom20}
                >
                    <Button color="info" round gradient size="md" onClick={handleClose}>
                        同意する
                    </Button>
                </GridContainer>
            </Dialog>
        </div>
    );
}

SuccessDialog.defaultProps = {
    title: 'Alert Dialog Title',
    handleClose: {},
    open: false,
    contents: 'Alert Dialog Contents',
};

SuccessDialog.propTypes = {
    title: PropTypes.string,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    contents: PropTypes.string,
};
