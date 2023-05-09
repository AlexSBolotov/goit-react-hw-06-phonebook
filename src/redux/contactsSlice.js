import { createSlice, nanoid } from '@reduxjs/toolkit';
import { StartState } from '../const/const';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contactsSlice';

// const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
// const contactsInitialState = parsedContacts ? parsedContacts : StartState;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: StartState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
