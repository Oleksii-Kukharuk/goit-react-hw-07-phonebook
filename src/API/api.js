import axios from 'axios';

axios.defaults.baseURL =
  'https://63cd5278d4d47898e396bfb8.mockapi.io/phonebook';

export async function fetchContactsApi() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}
