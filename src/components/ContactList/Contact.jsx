import React from 'react';
import { useDeletContactMutation } from 'redux/ContactsSlice';
import { ButtonDelete, ListItem } from './ContactList.syled';

export const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeletContactMutation();

  return (
    <>
      <ListItem>
        {name} : {phone}
        <ButtonDelete
          disabled={isDeleting}
          onClick={() => deleteContact(id)}
          type="button"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </ButtonDelete>
      </ListItem>
    </>
  );
};
