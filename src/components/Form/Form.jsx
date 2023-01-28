import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContainerForm, Input, Button, Title } from './Form.styled';
import { useCreateContactMutation } from 'redux/ContactsSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/ContactsSlice';

export const Form = () => {
  const [name, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  const [createContact] = useCreateContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setContactName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmitt = evt => {
    evt.preventDefault();
    // const allContactNames = contacts.map(contact => contact.name);
    // if (allContactNames.includes(name)) {
    //   alert(`${name} already in your contact list`);
    // } else {
    //   dispatch(addContact(name, number));
    // }
    createContact({
      name,
      phone,
    });
    reset();
  };

  const reset = () => {
    setContactName('');
    setPhone('');
  };

  return (
    <>
      <Title>
        Phonebook
        <img src="https://i.gifer.com/8LdV.gif" alt="gomer" />
      </Title>
      <ContainerForm onSubmit={handleSubmitt}>
        <label htmlFor={nameInputId}>Name </label>
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />

        <label htmlFor={numberInputId}>Number </label>
        <Input
          onChange={handleChange}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />

        <Button type="submit">Add contact</Button>
      </ContainerForm>
    </>
  );
};
