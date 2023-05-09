import ContactForm from './ContactForm/ContactForm';
// import { StartState } from 'const/const';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';

export function App() {
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = data => {
  //   //ADD
  //   isNamesDublicated(data.name)
  //     ? alert(`${data.name} is already in contacts.`)
  //     : setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  // };
  // const isNamesDublicated = name => {
  //   return contacts.some(el => el.name.toLowerCase() === name.toLowerCase());
  // };
  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // const filteredContacts = filterContacts();

  // const removeContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
}
