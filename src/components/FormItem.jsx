import axios from 'axios';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { string } from 'prop-types';

function FormItem({ history }) {
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
        .then((reponse) => reponse);
      history.push('/');
    }
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          id="type"
          name="type"
          label="Type"
          value={formik.values.type}
          onChange={formik.handleChange}
        />
        <TextField
          id="price"
          name="price"
          label="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <TextField
          id="rating"
          name="rating"
          label="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <TextField
          id="warranty_years"
          name="warranty_years"
          label="warranty_years"
          value={formik.values.warranty_years}
          onChange={formik.handleChange}
        />
        <TextField
          id="available"
          name="available"
          label="available"
          value={formik.values.available}
          onChange={formik.handleChange}
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

FormItem.propTypes = {
  history: string.isRequired
};

export default withRouter(FormItem);
