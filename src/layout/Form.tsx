import { FC, FormEventHandler, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    marginTop: '15px',
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: '1.5rem',
  },
  form: {
    maxWidth: '100%',
  },
  submitBtn: {
    marginTop: '15px',
  },
});

const Form: FC = () => {
  const classes = useStyles();

  const handleSubmit: FormEventHandler = (ev: FormEvent) => {
    ev.preventDefault();

    console.log(ev);
  };

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid justify="center" spacing={1} container>
              <Grid item xs={8}>
                <TextField
                  id="outlined-required"
                  label="Name"
                  variant="filled"
                  fullWidth={true}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-number"
                  label="Value"
                  type="number"
                  variant="filled"
                  fullWidth={true}
                  required
                />
              </Grid>
            </Grid>
            <Grid spacing={1} justify="center" container>
              <Button
                type="submit"
                className={classes.submitBtn}
                variant="contained"
                color="primary"
              >
                Generate
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
