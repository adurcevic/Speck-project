import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../lib/style/generalStyles";

const SignIn = () => {
  return (
    <>
      <Header isSecondary={true}></Header>
      <Section title={"Sign In"} isMainTitle={true} isCentered={true}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            isAdmin: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Inavlid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
                isAdmin: false,
              });
            }, 1000);
          }}
        >
          {(formik) => (
            <Form isCentered>
              <FormRow>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>
              <FormRow>
                <Button isOutline isForm disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? "Processing..." : "Sign In"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default SignIn;
