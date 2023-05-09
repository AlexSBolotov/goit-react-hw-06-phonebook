import s from './ContactForm.module.css';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const onInputChange = e => {
  //   const input = e.target;
  //   switch (input.name) {
  //     case 'name':
  //       setName(input.value);
  //       break;
  //     case 'number':
  //       setNumber(input.value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNamesDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    isNamesDublicated
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(name, number));
    // addContact({ name, number });
    // setName('');
    // setNumber('');
    form.reset();
  };
  return (
    <form className={s.wrapper} action="" onSubmit={onFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={name}
        // onChange={onInputChange}
      />
      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="text"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={number}
        // onChange={onInputChange}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
