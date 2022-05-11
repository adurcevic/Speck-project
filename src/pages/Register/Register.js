import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../lib/style/generalStyles";

const Register = () => {
  return (
    <>
      <Header isSecondary></Header>
      <Section title={"Register"} isCentered={true} isMainTitle={true}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            githubUsername: "",
            zeplinUsername: "",
            activeFacultyYear: "",
            isAdmin: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
            passwordConfirmed: Yup.string().test(
              "passwords-match",
              "Passwords must match",
              function (value) {
                return this.parent.password === value;
              }
            ),
            githubUsername: Yup.string().required(
              "Github username is required"
            ),
            zeplinUsername: Yup.string().required(
              "Zeplin username is required"
            ),
            activeFacultyYear: Yup.string().required(
              "Active faculty year is required"
            ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirmed: "",
                githubUsername: "",
                zeplinUsername: "",
                activeFacultyYear: "",
                isAdmin: false,
              });
            }, 1000);
          }}
        >
          {(formik) => (
            <Form isCentered>
              <FormRow>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="firstName" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="lastName" />
              </FormRow>
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
                <Field
                  type="password"
                  name="passwordConfirmed"
                  placeholder="Password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="passwordConfirmed" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="githubUsername"
                  placeholder="GitHub Username..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="gitHubUsername" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="zeplinUsername"
                  placeholder="Zeplin username..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="zeplinUsername" />
              </FormRow>
              <FormRow>
                <Select
                  disabled={formik.isSubmitting}
                  id="activeFacultyYear"
                  {...formik.getFieldProps("activeFacultyYear")}
                >
                  <Option value="" hidden>
                    Choose an Active faculty year
                  </Option>
                  <Option value="0">Not a student</Option>
                  <Option value="1">1st faculty year</Option>
                  <Option value="2">2nd faculty year</Option>
                  <Option value="3">3rd faculty year</Option>
                  <Option value="4">4th faculty year</Option>
                  <Option value="5">5th faculty year</Option>
                </Select>
                <ErrorMessage component={"div"} name="activeFacultyYear" />
              </FormRow>
              <FormRow>
                <Button isOutline isForm disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? "Processing..." : "Submit"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Register;
