import { toast } from "react-toastify";
import { AUTH_LOGIN, AUTH_FAIL, AUTH_SIGNIN, AUTH_START } from "./authtypes";

const initalstate = {
  authData: null,
  loading: false,
  error: false,
};

const authReducer = (
  state = initalstate, // this is the default state for our redux store
  action
) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true, error: false };
    case AUTH_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
      };
    case AUTH_SIGNIN:
      return { ...state, loading: false, error: fasle };
    case AUTH_FAIL:
      toast.error(action.data.msg);
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default authReducer;
