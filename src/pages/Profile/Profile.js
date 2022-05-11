import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import PasswordWidget from "../../components/PasswordWidget/PasswordWidget";
import { Grid } from "../../lib/style/generalStyles";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
  Label,
  Fieldset,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../lib/style/generalStyles";

const Profile = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <Header isSecondary></Header>
      <Section
        title={"My Profile"}
        isMainTitle={true}
        action={handleClick}
        buttonText={!active ? "Edit" : "Cancel"}
      >
        <Grid>
          <Fieldset disabled={!active ? true : false}>
            <Formik
              enableReinitialize={true}
              initialValues={{
                firstName: "Antonio",
                lastName: "Đurčević",
                email: "antonio.durcevic@gmail.com",
                githubUsername: "Rose432",
                zeplinUsername: "Rose55",
                activeFacultyYear: "2",
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
                      placeholder="First name..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="lastName">Last name:</Label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="email">Email:</Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="gitHubUsername">GitHub username:</Label>
                    <Field
                      type="text"
                      name="githubUsername"
                      placeholder="GitHub Username..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="gitHubUsername" />
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="zeplinUsername">Zeplin username:</Label>
                    <Field
                      type="text"
                      name="zeplinUsername"
                      placeholder="Zeplin username..."
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
                    <div style={{ display: !active ? "none" : "block" }}>
                      <Button isOutline disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Processing..." : "Update"}
                      </Button>
                    </div>
                  </FormRow>
                </Form>
              )}
            </Formik>
          </Fieldset>
          <PasswordWidget active={active}>
            <div style={{ display: !active ? "none" : "block" }}>
              <Formik
                initialValues={{
                  oldPassword: "",
                  newPassword: "",
                  newPasswordConfirmed: "",
                }}
                validationSchema={Yup.object({
                  oldPassword: Yup.string().required(
                    "Old password is required"
                  ),
                  newPassword: Yup.string()
                    .min(8, "New password must be at least 8 characters long")
                    .required("New password is required"),
                  newPasswordConfirmed: Yup.string().test(
                    "passwords-match",
                    "Passwords must match",
                    function (value) {
                      return this.parent.newPassword === value;
                    }
                  ),
                })}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(
                      JSON.stringify("Password updated successfully", null, 2)
                    );
                    actions.setSubmitting(false);
                    actions.resetForm({
                      oldPassword: "",
                      newPassword: "",
                      newPasswordConfirmed: "",
                    });
                  }, 1000);
                }}
              >
                {(formik) => (
                  <Form>
                    <FormRow>
                      <Field
                        type="password"
                        name="oldPassword"
                        placeholder="Old password..."
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="oldPassword" />
                    </FormRow>
                    <FormRow>
                      <Field
                        type="password"
                        name="newPassword"
                        placeholder="New password..."
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="newPassword" />
                    </FormRow>
                    <FormRow>
                      <Field
                        type="password"
                        name="newPasswordConfirmed"
                        placeholder="New password confirmed..."
                        disabled={formik.isSubmitting}
                      />
                      <ErrorMessage
                        component={"div"}
                        name="newPasswordConfirmed"
                      />
                    </FormRow>

                    <FormRow>
                      <Button isOutline disabled={formik.isSubmitting}>
                        {formik.isSubmitting
                          ? "Processing..."
                          : "Update password"}
                      </Button>
                    </FormRow>
                  </Form>
                )}
              </Formik>
            </div>
          </PasswordWidget>
        </Grid>
      </Section>
    </>
  );
};

export default Profile;
