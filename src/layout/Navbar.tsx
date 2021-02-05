import { FC, ReactEventHandler, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {
  title: string;
}

const Navbar: FC<Props> = ({ title }) => {
  const [isDark, setIsDark] = useState(false);
  const classes = useStyles();

  const handleThemeChange: ReactEventHandler = () => setIsDark(prevState => !prevState);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Fade in={true}>
            <Button onClick={handleThemeChange}>
              {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
            </Button>
          </Fade>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
