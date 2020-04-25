import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SignUpPage = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checkbox: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="container ">
      <div className="p-5">
        <div className="row justify-content-center">
          <div className="bg-danger rounded-circle">
            <i className="fas fa-lock fa-3x p-3 text-white"></i>
          </div>
        </div>
        <div className="row">
          <form className="mx-auto my-4" onSubmit={submitHandler}>
            <div className="form-row my-3 justify-content-center">
              <div className="col-6">
                <Input
                  type="text"
                  placeholder="First Name *"
                  changehandler={(e) =>
                    setName({ ...name, firstName: e.target.value })
                  }
                />
              </div>
              <div className="col-6">
                <Input
                  type="text"
                  placeholder="Last Name *"
                  changehandler={(e) =>
                    setName({ ...name, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="col-12">
                <Input
                  type="email"
                  placeholder="Email Adress *"
                  changehandler={(e) =>
                    setName({ ...name, email: e.target.value })
                  }
                />
              </div>
              <div className="col-12 my-3">
                <Input
                  type="password"
                  placeholder="Password *"
                  changehandler={(e) =>
                    setName({ ...name, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-row justify-content-between">
              <div className="col-2">
                <Input
                  type="checkbox"
                  changehandler={(e) => setName({ ...name, checkbox: true })}
                />
              </div>
              <div className="col-10">
                <p>
                  I want to receive inspiration, marekting promotions and
                  updates via email
                </p>
              </div>
            </div>
            <Button name="Sign Up" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
