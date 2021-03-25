import React from 'react';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import { string } from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const SignUp = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/auth/signup', values)
        .then(() => history.push('/login'));
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
      <h1>Inscription</h1>
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
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{
            margin: 15,
            width: '25ch'
          }}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{
            margin: 15,
            width: '25ch'
          }}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{
            margin: 15,
            width: '25ch'
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  history: string.isRequired
};

export default withRouter(SignUp);
