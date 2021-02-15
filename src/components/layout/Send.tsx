import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
});

const Send: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h3>Send via -</h3>
    </Container>
  );
};

export default Send;
