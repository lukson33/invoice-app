import React from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import { Button, OutlinedInput, TextField } from "@material-ui/core";

const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{ streetName: "" }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Create Invoice</h2>
            <TextField
              label="Street name"
              name="streetName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.streetName}
              variant="outlined"
            />
            <TextField
              label="City"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              variant="outlined"
            />
            <TextField
              label="Post code"
              name="postCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postCode}
              variant="outlined"
            />
            <TextField
              label="Country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              variant="outlined"
            />
            <div>
              <Button type="submit">Save &amp; Send</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
