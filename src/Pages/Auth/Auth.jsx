import React, { useEffect, useState } from "react";
import "./Auth.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, SignUp} from "../../actions/Authaction";
import authReducer from "../../reducers/authReducers";

const Auth = () => {
  const [isSignnUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const clearFormData = () => {
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  const handleChange = (event) => {
    // we use the [] with the event .target. name to dynamically set the value of the name
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    if (isSignnUp) {
      // toast.error("password and confirm password is not same ");
      data.password === data.confirmpass
        ? dispatch(SignUp(data))
        : toast.error("password and confirm password is not same ");
    } else {
      dispatch(login(data));
    }
  };
  
  const mystate = useSelector(state => state.authReducer)
  // console.log("my state are" , mystate)
  return (
    <div className="Auth">
      <div className="a-right">
        <form
          action="
        "
          className="infoForm authForm"
          onSubmit={handlesubmit}
        >
          <h3>{isSignnUp ? "SignUp " : "Login"}</h3>
          {isSignnUp && (
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="infoInput"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="infoInput"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="User Name"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignnUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <div>
            <span
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => {
                clearFormData();
                setIsSignUp(!isSignnUp);
              }}
            >
              {isSignnUp
                ? "Already have an account , Login!"
                : "Don't have and account ? Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignnUp ? "Sign up" : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Auth;
