import { combineReducers } from "redux";
import customerReducer from "./customer/CustomerReducer";
import modalReducer from "./modal/ModalReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  modal: modalReducer,
});


export default rootReducer;