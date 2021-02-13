import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

import { useAppContext } from '../context/Context';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: '#fff',
  },
}));

interface Props {
  title: string;
}

const Navbar: FC<Props> = ({ title }) => {
  const { theme, setTheme } = useAppContext();
  const classes = useStyles();

  const toggleTheme = () => {
    const key = 'theme';

    if (theme === 'dark') {
      localStorage.setItem(key, 'light');
      setTheme('light');
    } else {
      localStorage.setItem(key, 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <Fade in={true}>
            <Button className={classes.icon} onClick={toggleTheme}>
              {theme ? <Brightness4Icon /> : <Brightness7Icon />}
            </Button>
          </Fade>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
