import { ADD_MODAL, CLOSE_MODAL, EDIT_MODAL } from "./ModalActionTypes";

export const addModal = () => {
  return {
    type: ADD_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const editModal = (id: string) => {
  return {
    type: EDIT_MODAL,
    payload: id,
  };
};
