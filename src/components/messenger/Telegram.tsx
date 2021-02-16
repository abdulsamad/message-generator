import { MouseEventHandler, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';

import { useAppContext } from '../../context/Context';

const useStyles = makeStyles({
  button: {
    color: '#f5f5f5',
    backgroundColor: '#0088cc',

    '&:hover': {
      backgroundColor: '#3b90bb',
    },

    '&:active': {
      backgroundColor: '#0088cc',
    },

    '&:focus': {
      boxShadow: '0 0 0 0.2rem #3b90bb',
    },
  },
});

const Telegram: FC = () => {
  const { text } = useAppContext();
  const classes = useStyles();

  const handleClick: MouseEventHandler = () => {
    const formattedText = text.map(({ name, count }) => `**${name}** ${count}`).join('\n');
    const url = `https://t.me/share/url?text=${encodeURIComponent(formattedText)}`;

    window.open(url, '_blank');
  };

  return (
    <Button
      variant='contained'
      className={classes.button}
      startIcon={<TelegramIcon />}
      onClick={handleClick}>
      Telegram
    </Button>
  );
};

export default Telegram;
