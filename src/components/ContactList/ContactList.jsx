import * as React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/ContactsSlice';
import { Contact } from './Contact';
import { Title } from './ContactList.syled';
// import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const { data } = useGetContactsQuery();

  // const contacts = useSelector(
  //   state => state.contactsApi.queries.getContacts.data
  // );
  // console.log(contacts);
  const filterQuery = useSelector(state => state.filter);

  const filteredContacts = () => {
    const normalizedFilter = filterQuery.toLowerCase();
    const filtred = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtred;
  };

  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {data &&
          filteredContacts().map(data => (
            <Contact key={data.id} {...data}></Contact>
          ))}
      </ul>
    </div>
  );
};

// onClick={() => onDelete(id)}
