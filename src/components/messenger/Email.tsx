import { MouseEventHandler, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

import { useAppContext } from '../../context/Context';

const useStyles = makeStyles({
  button: {
    //
  },
});

const Email: FC = () => {
  const { text } = useAppContext();
  const classes = useStyles();

  const handleClick: MouseEventHandler = () => {
    const body = text.map(({ name, count }) => `${name} ${count}`).join('\n');
    const subject = 'Generated from Message Generator';
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(url, '_blank');
  };

  return (
    <Button
      variant='contained'
      className={classes.button}
      startIcon={<EmailIcon />}
      onClick={handleClick}>
      Email
    </Button>
  );
};

export default Email;
