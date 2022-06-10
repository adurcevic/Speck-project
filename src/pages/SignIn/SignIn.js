import React from "react";
import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
  FormSucessMessage,
  Fieldset,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../lib/style/generalStyles";
import { loginUser, getAllUsers } from "../../api/users";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <>
      <Header isSecondary={true}></Header>
      <Section title={"Sign In"} isMainTitle={true} isCentered={true}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              const res = await loginUser(values);
              const users = await getAllUsers(res.access_token);
              const user = users.find((user) => user.email === values.email);
              localStorage.setItem("accessToken", res.access_token);
              setIsLoggedIn(true);
              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
              });

              setSuccessMessage({
                error: false,
                message: `Hi ${
                  user.first_name + " " + user.last_name
                }, login was successfull.`,
              });

              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
            } catch (err) {
              setSuccessMessage({
                error: true,
                message: "Error occured, try again or contact us",
              });
              actions.setSubmitting(false);
            }
          }}
        >
          {(formik) => (
            <Fieldset isCentered>
              <Form>
                {successMessage && (
                  <FormRow>
                    <FormSucessMessage isError={successMessage.error}>
                      {successMessage.message}
                    </FormSucessMessage>
                  </FormRow>
                )}
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
                  <Button
                    type="submit"
                    isOutline
                    isForm
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Processing..." : "Sign In"}
                  </Button>
                </FormRow>
              </Form>
            </Fieldset>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default SignIn;
