import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);

export const fetchContactsSuccess = createAction(
  'contacts/fetchContacts/Success'
);

export const fetchContactsError = createAction('contacts/fetchContactsError');
