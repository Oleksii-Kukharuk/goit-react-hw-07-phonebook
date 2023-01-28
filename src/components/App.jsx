import React from 'react';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `start`,
          flex: `wrap`,
        }}
      >
        <Form />
        <div>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
