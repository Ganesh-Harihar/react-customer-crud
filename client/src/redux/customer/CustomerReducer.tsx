import {
  FETCH_CUSTOMERS_FAILURE,
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
} from "./CustomerActionTypes";

const initialState = {
  loading: false,
  customers: [],
  error: "",
};

const customerReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
        error: "",
      };

    case FETCH_CUSTOMERS_FAILURE:
      return {
        loading: false,
        customers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
