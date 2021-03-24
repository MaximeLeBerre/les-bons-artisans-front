import axios from 'axios';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { string } from 'prop-types';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    margin: 15
  }
});

function FormItem({ history }) {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      price: null,
      rating: null,
      warranty_years: null,
      available: false
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      const res = {
        name: values.name,
        type: values.type,
        price: parseFloat(values.price),
        rating: parseFloat(values.rating),
        warranty_years: parseFloat(values.warranty_years),
        available: (values.available === 'true')
      };
      axios.post('http://localhost:3000/api/object', res)
        .then((reponse) => reponse)
        .then(() => {
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
            history.push('/');
          }, 2000);
        }).catch(() => {
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 2000);
        });
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Card className={classes.root}>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'lightgrey'
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Nom"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <TextField
            id="type"
            name="type"
            label="Type"
            value={formik.values.type}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <TextField
            id="price"
            name="price"
            label="Prix (€)"
            value={formik.values.price}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <TextField
            id="rating"
            name="rating"
            label="Note"
            value={formik.values.rating}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <TextField
            id="warranty_years"
            name="warranty_years"
            label="Années de garantie"
            value={formik.values.warranty_years}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <TextField
            id="available"
            name="available"
            label="Disponibilité"
            value={formik.values.available}
            onChange={formik.handleChange}
            className={classes.root}
          />
          <Button color="primary" variant="contained" type="submit" className={classes.root}>
            Envoyer
          </Button>
        </form>
      </Card>
      {successMessage
        ? (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open="true"
            message="Succes"
            action={(
              <>
                <IconButton size="small" aria-label="close" color="primary">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            )}
          />
        ) : <p /> }
      {errorMessage
        ? (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open="true"
            message="Erreur"
            action={(
              <>
                <IconButton size="small" aria-label="close" color="secondary">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            )}
          />
        ) : <p /> }
    </div>
  );
}

FormItem.propTypes = {
  history: string.isRequired
};

export default withRouter(FormItem);
