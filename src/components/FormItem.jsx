import axios from 'axios';
import { Formik, Field, Form } from 'formik';

export default function FormItem() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          type: '',
          price: null,
          rating: null,
          warranty_years: null,
          available: false
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          /* const res = (JSON.stringify(values, null, 2)); */
          axios.post('http://localhost:3000/api/object', values)
            .then((reponse) => reponse);
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
  );
}
