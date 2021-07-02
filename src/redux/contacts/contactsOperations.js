import axios from "axios";

import {
  addNewContactFailure,
  addNewContactRequested,
  addNewContactSuccess,
  getAllContactsFailure,
  getAllContactsRequest,
  getAllContactsSuccess,
  removeContactFailure,
  removeContactRequest,
  removeContactSuccess,

} from "./contactsActions";

axios.defaults.baseURL = "http://localhost:3001/";

const addNewContact = (contact) => async (dispatch, _) => {

  dispatch(addNewContactRequested());
  try {

    const { data } = await axios.post("contacts", contact);
    dispatch(addNewContactSuccess(data));
  } catch (error) {
    dispatch(addNewContactFailure(error));
  }
};

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get("contacts");
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsFailure(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactFailure(error));
  }
};


export { addNewContact, getAllContacts, removeContact };
