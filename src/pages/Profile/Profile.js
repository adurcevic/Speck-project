import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Grid } from "../../lib/style/generalStyles";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
  Label,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../lib/style/generalStyles";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <Header isSecondary></Header>
      <Section
        title={"My Profile"}
        isMainTitle={true}
        action={handleClick}
        buttonText={!open ? "Edit" : "Cancel"}
      >
        <Grid>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",

              githubUsername: "",
              zeplinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Inavlid email address")
                .required("Email is required"),

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

                  githubUsername: "",
                  zeplinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });
              }, 1000);
            }}
          >
            {(formik) => (
              <Form>
                <FormRow>
                  <Label htmlFor="firstName">First name:</Label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Antonio"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <Label htmlFor="lastName">Last name:</Label>

                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Đurčević"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <Label htmlFor="email">Email:</Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="antonio.durcevic@gmail.com"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <Label htmlFor="gitHubUsernam">GitHub username:</Label>
                  <Field
                    type="text"
                    name="gitHubUsername"
                    placeholder="Rose432"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="gitHubUsername" />
                </FormRow>
                <FormRow>
                  <Label htmlFor="zeplinUsernam">Zeplin username:</Label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    placeholder="Rose55"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>
                <FormRow>
                  <Label htmlFor="activeFacultyYear">
                    Active faculty year:
                  </Label>
                  <Select
                    disabled={formik.isSubmitting}
                    id="activeFacultyYear"
                    {...formik.getFieldProps("activeFacultyYear")}
                  >
                    <Option value="" hidden>
                      2nd faculty year
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
              </Form>
            )}
          </Formik>
        </Grid>
      </Section>
    </>
  );
};

export default Profile;
