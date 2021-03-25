/* import { useParams, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import { string } from 'prop-types';

function ItemDetails({ history }) {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const token = localStorage.getItem('token');

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/api/object/${id}`, axiosConfig).then((res) => {
      const data = [res.data];
      setItem(data);
    });
  }, [id]);

  return (
    <>
      {item.map((obj) => (
        <div key={obj.id + 1}>
          <Formik
            initialValues={{
              name: obj.name,
              type: obj.type,
              price: obj.price,
              rating: obj.rating,
              warranty_years: obj.warranty_years,
              available: obj.available
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              axios.put(`http://localhost:3000/api/object/${id}`, values, axiosConfig)
                .then((reponse) => reponse);
              history.push('/');
            }}
          >
            <Form>
              <label htmlFor="Name">Name</label>
              <Field id="name" name="name" />

              <label htmlFor="Type">Type</label>
              <Field id="type" name="type" />

              <label htmlFor="price">price</label>
              <Field id="price" name="price" />

              <label htmlFor="rating">rating</label>
              <Field id="rating" name="rating" type="number" />

              <label htmlFor="warranty_years">warranty_years</label>
              <Field id="warranty_years" name="warranty_years" />

              <label htmlFor="available">available</label>
              <Field id="available" name="available" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      ))}
    </>
  );
}

ItemDetails.propTypes = {
  history: string.isRequired
};

export default withRouter(ItemDetails); */

import { useParams, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import { string } from 'prop-types';

function ItemDetails({ history }) {
  const { id } = useParams();

  const token = localStorage.getItem('token');

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/object/${id}`, axiosConfig).then((res) => {
      const data = [res.data];
      setItem(data);
    });
  }, [id]);
  const defaultvalues = {
    name: item.name,
    type: item.type,
    price: item.price,
    rating: item.rating,
    warranty_years: item.warranty_years,
    available: item.available
  };
  const [formValues, setFormValues] = useState(defaultvalues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/api/object/${id}`, formValues, axiosConfig)
      .then((reponse) => reponse);
    history.push('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h1>Modifier un object</h1>
        <form
          onSubmit={handleSubmit}
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
            label="Nom"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            style={{
              margin: 15,
              width: '25ch'
            }}
          />
          <TextField
            id="type"
            name="type"
            label="Type"
            type="text"
            defaultValue={formValues.type}
            onChange={handleInputChange}
            style={{
              margin: 15,
              width: '25ch'
            }}
          />
          <TextField
            id="price"
            name="price"
            label="Prix"
            type="number"
            value={formValues.price}
            onChange={handleInputChange}
            style={{
              margin: 15,
              width: '25ch'
            }}
          />
          <FormControl>
            <FormLabel>Note</FormLabel>
            <Select
              name="rating"
              value={formValues.rating}
              onChange={handleInputChange}
              style={{
                margin: 15,
                width: '25ch'
              }}
            >
              <MenuItem key="1" value="1">1</MenuItem>
              <MenuItem key="2" value="2">2</MenuItem>
              <MenuItem key="3" value="3">3</MenuItem>
              <MenuItem key="4" value="4">4</MenuItem>
              <MenuItem key="5" value="5">5</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Années de garantie</FormLabel>
            <Select
              name="warranty_years"
              value={formValues.warranty_years}
              onChange={handleInputChange}
              style={{
                margin: 15,
                width: '25ch'
              }}
            >
              <MenuItem key="1" value="1">1</MenuItem>
              <MenuItem key="2" value="2">2</MenuItem>
              <MenuItem key="3" value="3">3</MenuItem>
              <MenuItem key="4" value="4">4</MenuItem>
              <MenuItem key="5" value="5">5</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Disponible</FormLabel>
            <Select
              name="available"
              value={formValues.available}
              onChange={handleInputChange}
              style={{
                margin: 15,
                width: '25ch'
              }}
            >
              <MenuItem key="true" value="true">Oui</MenuItem>
              <MenuItem key="false" value="false">Non</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
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
    </>
  );
}

ItemDetails.propTypes = {
  history: string.isRequired
};

export default withRouter(ItemDetails);
