import React from "react";
import "./register.scss";
import { RegisterImage } from "../../assets";
import { Button, Gap, Input, LinkReact } from "../../components";

function Register() {
  return (
    <div className="main-body">
      <div className="left">
        <img
          alt="Gambar-login-page"
          className="image-page"
          src={RegisterImage}
        />
      </div>
      <div className="right">
        <h3>Register Form</h3>
        <Input label={"Username"} placeholder="Masukan Username" />
        <Gap height={10} />
        <Input
          label={"Password"}
          placeholder="Masukan Password"
          type="password"
        />
        <Gap height={10} />
        <Input
          label={"Email"}
          placeholder="Masukan Email"
          type="email"
        />
        <Gap height={30} />
        <Button title={"Register"} />
        <Gap height={40} />
        <LinkReact title={"Sudah Punya akun?,Login"} to="/login" />
      </div>
    </div>
  );
}

export default Register;
