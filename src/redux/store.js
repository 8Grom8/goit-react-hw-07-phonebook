import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";

const store = configureStore({
  // middleware: [],
  devTools: true,
  reducer: {
    contacts: contactsReducer,
  },
});

export { store };
