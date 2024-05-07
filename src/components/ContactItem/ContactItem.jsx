import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
