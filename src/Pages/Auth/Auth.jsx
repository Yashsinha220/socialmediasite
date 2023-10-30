import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      {/* <SignUp /> */}
      <Login/>
    </div>
  );
};
const Login = () => {
    return (
      <div className="a-right login">
        <form
          action="
          "
          className="infoForm authForm"
        >
          <h3>Login</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="User Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
          </div>
  
          <div>
              <span style={{fontSize : "12px"}}>Already have an account, Login!</span>
          </div>
          <button className="button infoButton" type="submit">Sign up</button>
        </form>
      </div>
    );
  };


const SignUp = () => {
  return (
    <div className="a-right">
      <form
        action="
        "
        className="infoForm authForm"
      >
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            id=""
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            id=""
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="User Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize : "12px"}}>Already have an account, Login!</span>
        </div>
        <button className="button infoButton" type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Auth;
