import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "./CustomerActionTypes";


export const fecthCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

export const fecthCustomerSuccess = (customers: any) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers,
  };
};

export const fecthCustomerFailure = (error: any) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};
