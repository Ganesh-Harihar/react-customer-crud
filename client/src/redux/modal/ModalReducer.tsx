import { ADD_MODAL, CLOSE_MODAL, EDIT_MODAL } from "./ModalActionTypes";

const initialState = {
  isOpen: false,
  isModalOpenToEdit: false,
  editId: "",
};

const modalReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MODAL:
      return {
        isOpen: true,
        isModalOpenToEdit: false,
        editId: "",
      };

    case CLOSE_MODAL:
      return {
        isOpen: false,
        isModalOpenToEdit: false,
        editId: "",
      };

    case EDIT_MODAL:
      return {
        isOpen: true,
        isModalOpenToEdit: true,
        editId: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
