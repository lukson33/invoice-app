import React from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import { Button, OutlinedInput, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addInvoice }) => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(data) => {
          const invoice = {
            clientsAddress: {
              streetName: data.clientsAddress,
              city: data.clientCity,
              country: data.clientCountry,
              postCode: data.clientCode,
            },
            id: uuidv4(),
            clientName: data.clientName,
            clientEmail: data.clientsEmail,
            senderAddress: {
              streetName: data.streetName,
              city: data.city,
              country: data.country,
              postCode: data.postCode,
            },
            description: data.description,
            status: "pending",
          };
          addInvoice(invoice);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Create Invoice</h2>
            <div className="form-row">
              <TextField
                label="Street name"
                name="streetName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.streetName}
                variant="outlined"
              />
            </div>
            <div className="form-row">
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
            </div>
            <div className="form-row">
              <TextField
                label="Clients name"
                name="clientsName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientsName}
                variant="outlined"
              />
            </div>
            <div className="form-row">
              <TextField
                label="Clients email"
                name="clientsEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientsEmail}
                variant="outlined"
              />
            </div>
            <div className="form-row">
              <TextField
                label="Street address"
                name="clientsAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientsAddress}
                variant="outlined"
              />
            </div>
            <div className="form-row">
              <TextField
                label="City"
                name="clientCity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientCity}
                variant="outlined"
              />
              <TextField
                label="Post code"
                name="clientCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientCode}
                variant="outlined"
              />
              <TextField
                label="Country"
                name="clientCountry"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.clientCountry}
                variant="outlined"
              />
            </div>

            <div className="form-row">
              <TextField
                label="Description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                variant="outlined"
              />
            </div>
            <div>
              <Button type="submit">Save &amp; Send</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
