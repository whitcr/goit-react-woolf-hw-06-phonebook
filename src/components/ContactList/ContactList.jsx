import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from '../../redux/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
