import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

const SignInPage = () => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "B1tD3V",
  };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      axios
        .post("https://blog-api.hypetech.xyz/v1/auth/login", values, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
        });
    },
  });

  return (
    <div className="container">
      <div className="py-5">
        <div className="row justify-content-center">
          <div className="bg-danger rounded-circle">
            <i className="fas fa-lock fa-3x p-3 text-white"></i>
          </div>
        </div>
        <h3>Sign In</h3>
        <div className="row">
          <form className="mx-auto" onSubmit={formik.handleSubmit}>
            <div className="form-row my-3 justify-content-center">
              <div className="col-12">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  changehandler={formik.handleChange}
                  inputValue={formik.values.email}
                />
              </div>
              <div className="col-12 m-3">
                <Input
                  name="password"
                  type="password"
                  placeholder="Password *"
                  changehandler={formik.handleChange}
                  inputValue={formik.values.password}
                />
              </div>
            </div>
            <div className="form-row ">
              <div className="col-2 justify-content-start">
                <input className="my-3" type="checkbox" />
              </div>
              <div className="col-8 text-left">
                <p className="my-2">Remember me</p>
              </div>
            </div>
            <Button name="Sign In" type="submit" />
            <div className="form-row py-3">
              <div className="col-6 text-left">
                <Link to="/">
                  <span>Forgot password?</span>
                </Link>
              </div>
              <div className="col-6 text-right">
                <Link to="/signup">
                  <span>Dont have an account?Sign up</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
