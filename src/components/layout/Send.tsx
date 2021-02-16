import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import WhatsApp from '../messenger/WhatsApp';
import Telegram from '../messenger/Telegram';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
  row: {
    display: 'flex',
    gap: 15,
    flexWrap: 'wrap',
  },
});

const Send: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h3>Send via -</h3>
      <div className={classes.row}>
        <WhatsApp />
        <Telegram />
      </div>
    </Container>
  );
};

export default Send;
