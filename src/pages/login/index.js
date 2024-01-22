import React from "react";
import "./login.scss";
import { LoginImage } from "../../assets";
import { Button, Gap, Input, LinkReact } from "../../components";

function Login() {
  return (
    <div className="main-body">
      <div className="left">
        <img alt="Gambar-login-page" className="image-page" src={LoginImage} />
      </div>
      <div className="right">
        <h3>Login Form</h3>
        <Input label={"Username"} placeholder="Masukan Username" />
        <Gap height={10} />
        <Input
          label={"Password"}
          placeholder="Masukan Password"
          type="password"
        />
        <Gap height={30} />
        <Button title={"Login"} />
        <Gap height={40}/>
        <LinkReact title={"Belum Punya akun?,Register"} to="/register" />
      </div>
    </div>
  );
}

export default Login;
