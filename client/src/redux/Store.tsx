import { createStore } from "redux";
import customerReducer from "./customer/CustomerReducer";
const store = createStore(customerReducer);
export default store;