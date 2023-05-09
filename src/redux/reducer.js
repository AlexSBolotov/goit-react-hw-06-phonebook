import { StartState } from '../const/const';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
const initialState = {
  contacts: parsedContacts ? parsedContacts : StartState,
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'filters/setFilter':
      return {
        ...state,
        // contacts: state.contacts.filter(
        //   contact => contact.id !== action.payload
        // ),
        filter: {
          ...state.filter,
          status: action.payload,
        },
      };
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
