import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_div: "transform-class-login",
      div_name: "login",
      flip: "flip-login",
      screenWidth: window.innerWidth
    };
  }

  show_login = (data) => {
    if (data == "login") {
      console.log("login data :::::", data);
      this.setState({ show_div: "transform-class-register" });
      this.setState({ div_name: "register" });
    } else {
      console.log("data :::::", data);
      this.setState({ show_div: "transform-class-login" });
      this.setState({ div_name: "login" });
    }
  };

  left_login = () => {
    return (
      <div className="lgn_left">
        <h1>LOGIN</h1>
        <p>Please enter your Username and password</p>
        <h1
          className="btn log-button"
          onClick={() => this.show_login("login")}
        >
          For SignUp
                </h1>
      </div>
    )
  }

  left_register = () => {
    return (
      <div className="lgn_left">
        <h1>SIGN UP</h1>
        <p>Please enter your Username and password</p>
        <h1
          className="btn log-button"
          onClick={() => this.show_login("register")}
        >
          For Login
                </h1>
      </div>
    )
  }

  login_input = (toggle) => {
    return (

      <div className="lgn_right">
        <input
          className="field"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="field"
          type="password"
          placeholder="Password"
          id="password"
        />
        <input className="btn" type="submit" value="LOGIN" style={{ color: 'white' }} />
        <a href="#" className="forgot">
          Register
                </a>
        <a href="#" className="forgot">
          Forgot password?
                </a>

        {
          toggle != true ? (
            this.left_login()
          ) : (
              null
            )
        }
      </div>

    )
  }

  register_input = (toggle) => {
    return (
      <div className="lgn_right">
        <input
          className="field"
          type="text"
          placeholder="first name"
          id="username"
        />
        <input
          className="field"
          type="text"
          placeholder="last name"
          id="username"
        />
        <input
          className="field"
          type="text"
          placeholder="Email"
          id="username"
        />
        <input
          className="field"
          type="password"
          placeholder="Password"
          id="password"
        />
        <input className="btn" type="submit" value="REGISTER" style={{ color: 'white' }} />
        <a href="#" className="forgot">
          Register
                </a>
        <a href="#" className="forgot">
          Forgot password?
                </a>

        {
          toggle != true ? (
            this.left_register()
          ) : (
              null
            )
        }
      </div>
    )
  }

  login = (show_div, toggle) => {
    return (
      <div
        className="login"
        className={
          toggle ? (show_div == "transform-class-register" ? show_div : "login") : (show_div == "transform-class-register" ? show_div : "login-responsive")
        }
      >

        {
          toggle ? (
            this.left_login()
          )
            : (
              null
            )
        }

        {
          this.login_input(toggle)
        }

      </div>
    )
  }

  register = (show_div, toggle) => {
    return (
      <div
        className="register"
        className={
          toggle ? (show_div == "transform-class-login" ? show_div : "register") : (show_div == "transform-class-login" ? show_div : "register-responsive")
        }
      >

        {
          toggle ? (
            this.left_register()
          )
            : (
              null
            )
        }

        {
          this.register_input(toggle)
        }


      </div>
    )
  }

  render() {
    const { show_div, screenWidth } = this.state;
    return (
      
      <div className="container-fluid " style={{height:'37.5rem',backgroundColor:'black'}}>
        <div className="child" >
          <div className="row login-form-row">
            <div className="col-xl-3 col-lg-3 col-md-12"></div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-xm-12 col-xs-12 login-div" style={{width:'auto'}}>

              {
                screenWidth < 600 ? (
                  <>
                    <div style = {{height: '25rem'}}>
                      {
                        this.login(show_div, false)
                      }
                    </div>
                    <div style = {{height: '25rem'}}>
                      {
                        this.register(show_div, false)
                      }
                    </div>
                  </>
                ) : (
                    <>
                      {
                        this.login(show_div, true)
                      }

                      {
                        this.register(show_div, true)
                      }
                    </>
                  )
              }

            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xm-1 col-xs-1"></div>
      </div>




    );
  }
}

export default Login;
