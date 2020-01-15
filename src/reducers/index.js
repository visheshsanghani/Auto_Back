import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import login_Reducer from "./login_Reducer";
import score_Reducer from "./score_Reducer";
import register_Reducer from "./register_Reducer";
import admin_Reducer from "./admin_Reducer";

export default combineReducers({
  form: formReducer,
  login: login_Reducer,
  score: score_Reducer,
  register: register_Reducer,
  admin : admin_Reducer
});