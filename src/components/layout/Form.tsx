import { FC, FormEventHandler, FormEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useAppContext } from '../../context/Context';
import { names, count } from '../../data';

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
  resetBtn: {
    marginTop: 15,
    marginLeft: 15,
  },
});

const Form: FC = () => {
  const { addText } = useAppContext();
  const [nameVal, setNameVal] = useState('');
  const [countVal, setCountVal] = useState('');
  const classes = useStyles();

  const handleSubmit: FormEventHandler = (ev: FormEvent) => {
    ev.preventDefault();

    if (!nameVal || !countVal) return;

    addText({ name: nameVal, count: countVal });
    clearFields();
  };

  const clearFields = () => {
    setNameVal('');
    setCountVal('');
  };

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.form} autoComplete='off' onSubmit={handleSubmit} noValidate>
            <Grid justify='center' spacing={1} container>
              <Grid item xs={8}>
                <Autocomplete
                  id='name'
                  clearOnBlur={false}
                  options={names}
                  inputValue={nameVal}
                  onInputChange={(ev, newInputValue: string) => {
                    setNameVal(newInputValue);
                  }}
                  getOptionLabel={option => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Name'
                      variant='filled'
                      name='name'
                      fullWidth
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
                  inputValue={countVal}
                  onInputChange={(ev, newInputValue: string) => {
                    setCountVal(newInputValue);
                  }}
                  getOptionLabel={option => option}
                  renderInput={params => (
                    <TextField
                      {...params}
                      type='number'
                      label='Count'
                      variant='filled'
                      name='count'
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button type='submit' className={classes.submitBtn} variant='contained' color='primary'>
              Add
            </Button>
            <Button
              className={classes.resetBtn}
              variant='outlined'
              color='primary'
              onClick={clearFields}>
              Clear Fields
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
