import * as AuthApi from "../api/AuthRequest";

export const login = (formdata) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formdata);
    dispatch({ type: "AUTH_LOGIN", data: data });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL", data: error.response.data });
  }
};

export const SignUp = (formdata) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formdata);
    dispatch({ type: "AUTH_SIGNIN" });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL", data: error.response.data });
  }
};
