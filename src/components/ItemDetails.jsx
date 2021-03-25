import { useParams, withRouter } from 'react-router-dom';
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

export default withRouter(ItemDetails);
