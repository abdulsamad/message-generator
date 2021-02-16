import { FC, useState, forwardRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { useAppContext } from '../../context/Context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 20,
  },
}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Reset: FC = () => {
  const { resetText } = useAppContext();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = () => {
    resetText();
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Button variant='contained' color='secondary' onClick={handleClickOpen} fullWidth>
        Reset All Data
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle id='alert-dialog-slide-title'>
          Are you sure you want to reset data?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <b>Note:</b> All your items added after the page load will get removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            No
          </Button>
          <Button onClick={reset}>Yes</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Reset;
