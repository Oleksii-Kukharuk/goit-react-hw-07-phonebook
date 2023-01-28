import * as React from 'react';
import { useGetContactsQuery } from 'redux/ContactsSlice';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';
// import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  // const dispatch = useDispatch();

  console.log(data, error, isLoading);

  // const contacts = useSelector(state => state.contacts.contacts);
  // const filterQuery = useSelector(state => state.filter);

  // const filteredContacts = () => {
  //   const normalizedFilter = filterQuery.toLowerCase();
  //   const filtred = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return filtred;
  // };

  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {data &&
          data.map(({ id, name, phone }) => (
            <ListItem key={id}>
              {name}: {phone}
              <ButtonDelete
                // onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </ButtonDelete>
            </ListItem>
          ))}
      </ul>
    </div>
  );
};

// onClick={() => onDelete(id)}
