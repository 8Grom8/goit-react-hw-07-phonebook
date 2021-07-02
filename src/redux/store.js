import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contactsReducer";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ['items'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }

//   return next(action);
// };

const store = configureStore({
  // middleware: [],
  devTools: true,
  reducer: {
    contacts: contactsReducer,
  },
});

export { store };
