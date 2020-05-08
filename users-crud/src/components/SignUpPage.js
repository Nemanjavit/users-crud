import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

const SignUpPage = () => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "B1tD3V",
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);

      axios
        .post("https://blog-api.hypetech.xyz/v1/auth/register", values, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
        });
    },
  });

  return (
    <div className="container ">
      <div className="p-5">
        <div className="row justify-content-center">
          <div className="bg-danger rounded-circle">
            <i className="fas fa-lock fa-3x p-3 text-white"></i>
          </div>
        </div>
        <h3>Sign up page</h3>
        <div className="row">
          <form className="mx-auto my-4" onSubmit={formik.handleSubmit}>
            <div className="form-row my-3 justify-content-center">
              <div className="col-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="First Name *"
                  changehandler={formik.handleChange}
                  inputValue={formik.values.first}
                />
              </div>
              <div className="col-6">
                <Input name="last" type="text" placeholder="Last Name *" />
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="col-12">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Adress *"
                  changehandler={formik.handleChange}
                  inputValue={formik.values.email}
                />
              </div>
              <div className="col-12 my-3">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  changehandler={formik.handleChange}
                  inputValue={formik.values.password}
                />
              </div>
            </div>
            <div className="form-row justify-content-between">
              <div className="col-2">
                <input className="my-2" type="checkbox" />
              </div>
              <div className="col-10">
                <p>
                  I want to receive inspiration, marekting promotions and
                  updates via email
                </p>
              </div>
            </div>
            <Button name="Sign Up" type="submit" />
            <div className="form-row justify-content-end py-3">
              <Link to="/signin">
                <span>Already have an account?Sign in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
