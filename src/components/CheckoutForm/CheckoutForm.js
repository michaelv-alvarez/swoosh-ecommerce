import { Form, Formik } from "formik";
import React from "react";
import TextField from "./TextField";
import * as Yup from "yup";

const CheckoutForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .max(15, "Email is invalid")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .max(15, "Email is invalid")
      .oneOf([Yup.ref("email"), null], "Email must match")
      .required("Confirm email is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <Form className="checkoutForm">
            <TextField label="First name" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Confirm Email" name="confirmEmail" type="email" />
            <button type="submit" className="checkoutForm__submit">
              Complete purchase
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
