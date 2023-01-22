import * as contactsActions from './contactsActions';
import { fetchContactsApi } from 'API/api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await fetchContactsApi();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
    dispatch(contactsActions.fetchContactsRequest(false));
  }
};
