import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/login.css";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChage = this.handleChage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isload: false,
      statusCode: 0,
      messange: "",
      email: "example@appman.co.th",
      password: "password"
    };
  }

  componentDidUpdate() {
    if (this.state.statusCode === 200 && this.state.messange === "") {
      this.setState(() => {
        return {
          statusCode: 0,
          isload: false
        };
      });
      alert("Login Successed");
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="card">
          <img
            src={logo}
            className={"logo " + (this.state.isload ? "logo-spin" : "")}
            alt="logo"
          />
          <div className="login-container">
            <p> E-mail address </p>
            <input
              type="text"
              name="email"
              className="app-input"
              placeholder="example@appmam.co.th"
              value={this.state.email}
              onChange={this.handleChage}
            />
            <p>Password </p>
            <input
              type="text"
              name="password"
              className="app-input"
              placeholder="your password..."
              value={this.state.password}
              onChange={this.handleChage}
            />
            <div className="invalid-feedback">{this.state.messange}</div>
            <div className="buton-layout">
              <button type="summit">SIGN IN</button>
            </div>
            <div className="grid-container">
              <div className="item1">
                <a>Forgot password ?</a>
              </div>
              <div className="item2">
                <a>Create a new account</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit: ", this.state);

    this.setState(() => {
      return {
        isload: true
      };
    });

    axios
      .post("http://localhost:3000/api/login/", this.state)
      .then(res => {
        /*console.log("response");
        console.log(res);*/
        if (res) {
          this.setState(() => {
            return {
              statusCode: res.status,
              messange: "",
              isload: false
            };
          });
        }
      })
      .catch(error => {
        if (error.response) {
          /*console.log(error.response.data);
          console.log(error.response.status);*/
          this.setState(() => {
            return {
              statusCode: error.response.status,
              messange: error.response.data.msg,
              isload: false
            };
          });
        }
      });
  };

  handleChage = e => {
    const value = e.target.value;
    const name = e.target.name;
    //console.log(value);
    this.setState({
      [name]: value
    });
  };
}

export default Login;
