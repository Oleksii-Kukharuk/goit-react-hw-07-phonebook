import React from 'react';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        flex: `wrap`,
      }}
    >
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};
