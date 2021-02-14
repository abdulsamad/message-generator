import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';

import { names, count } from '../../autocompleteData';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
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
    marginTop: 15,
  },
  generateBtn: {
    marginLeft: 15,
  },
});

interface Inputs {
  name: string;
  count: string;
}

const Form: FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = ({ name, count }: Inputs) => {
    console.log(name, count);
  };

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form
            className={classes.form}
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
            noValidate>
            <Grid justify='center' spacing={1} container>
              <Grid item xs={8}>
                <Autocomplete
                  id='name'
                  clearOnBlur={false}
                  options={names}
                  getOptionLabel={option => option.title}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Name'
                      variant='filled'
                      name='name'
                      fullWidth={true}
                      inputRef={register({ required: true })}
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  id='count'
                  clearOnBlur={false}
                  options={count}
                  getOptionLabel={option => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      type='number'
                      label='Count'
                      variant='filled'
                      name='count'
                      fullWidth={true}
                      inputRef={register({ required: true })}
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid spacing={2} justify='center' container>
              <Button
                type='submit'
                className={classes.submitBtn}
                variant='outlined'
                color='primary'>
                Add
              </Button>
              <Button
                className={classes.generateBtn}
                variant='contained'
                color='primary'
                onClick={() => console.log('Clicked Generate')}>
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
