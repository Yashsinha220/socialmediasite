// this file is created to combine all the reducers of the redux
import { combineReducers } from "redux"
import authReducer from "./authReducers"

export const reducers = combineReducers({authReducer})
