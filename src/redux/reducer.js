import { StartState } from '../const/const';
import { combineReducers } from 'redux';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

const contactsInitialState = parsedContacts ? parsedContacts : StartState;
const filterInitialState = '';

const addToLocalStorage = newContacts =>
  localStorage.setItem('contacts', JSON.stringify(newContacts));

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const newContacts = [...state, action.payload];
      addToLocalStorage(newContacts);
      return newContacts;
    }
    case 'contacts/deleteContact': {
      const newContacts = state.filter(
        contact => contact.id !== action.payload
      );
      addToLocalStorage(newContacts);
      return newContacts;
    }
    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filters/setFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const initialState = {
//   contacts: parsedContacts ? parsedContacts : StartState,
//   filter: '',
// };
// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReducer(state.contacts, action),
//     filter: filterReducer(state.filter, action),
//   };
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'filters/setFilter':
//       return {
//         ...state,
//         // contacts: state.contacts.filter(
//         //   contact => contact.id !== action.payload
//         // ),
//         filter: {
//           ...state.filter,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
