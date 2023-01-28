import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  useDeletContactMutation,
  useGetContactsQuery,
} from 'redux/ContactsSlice';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';
// import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeletContactMutation();

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
          filteredContacts().map(({ id, name, phone }) => (
            <ListItem key={id}>
              {name}: {phone}
              <ButtonDelete
                disabled={isDeleting}
                onClick={() => deleteContact(id)}
                type="button"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </ButtonDelete>
            </ListItem>
          ))}
      </ul>
    </div>
  );
};

// onClick={() => onDelete(id)}
