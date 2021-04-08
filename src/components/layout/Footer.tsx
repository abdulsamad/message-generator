import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavouriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    margin: "30px 0",
  },
  icon: {
    margin: "0 5px",
  },
}));

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body1" align="center">
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>Made with</Grid>
          <Grid item>
            <FavouriteIcon className={classes.icon} color="secondary" />
          </Grid>
          <Grid item>by AbdulSamad</Grid>
        </Grid>
      </Typography>
    </footer>
  );
};

export default Footer;
