import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/actions';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.includes(filter));
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <ul className={s.wrapper}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
// ContactList.propTypes = {
//   removeContact: PropTypes.func,
// };