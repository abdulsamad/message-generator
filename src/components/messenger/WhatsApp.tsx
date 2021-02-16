import { MouseEventHandler, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { useAppContext } from '../../context/Context';

const useStyles = makeStyles({
  button: {
    color: '#f5f5f5',
    backgroundColor: '#25d366',

    '&:hover': {
      backgroundColor: '#57d685',
    },

    '&:active': {
      backgroundColor: '#57d685',
    },

    '&:focus': {
      boxShadow: '0 0 0 0.2rem #57d685',
    },
  },
});

const WhatsApp: FC = () => {
  const { text } = useAppContext();
  const classes = useStyles();

  const handleClick: MouseEventHandler = () => {
    const formattedText = text.map(({ name, count }) => `*${name}* _${count}_`).join('\n');
    const url = `https://wa.me?text=${encodeURIComponent(formattedText)}`;

    window.open(url, '_blank');
  };

  return (
    <Button
      variant='contained'
      className={classes.button}
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}>
      WhatsApp
    </Button>
  );
};

export default WhatsApp;
