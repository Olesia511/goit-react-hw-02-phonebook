import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { BasicContainer } from './App.styled';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const doubleContact = contacts.find(
      el =>
        el.contact.name.trim().toLowerCase() ===
        contact.name.trim().toLowerCase()
    );

    if (doubleContact) {
      Notify.failure(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { contact }],
    }));
  };

  deleteContact = evt => {
    const id = evt.target.closest('li').id;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => {
          return el.contact.id !== id;
        }),
      };
    });
  };

  updateFilter = value => {
    this.setState({
      filter: value.trim().toLowerCase(),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContact = contacts.filter(el =>
      el.contact.name.toLowerCase().includes(filter)
    );

    return (
      <BasicContainer>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 style={{ marginBottom: 24 }}>Contacts</h2>
        <h3 style={{ marginBottom: 8 }}>Find contacts by name</h3>

        <Filter onChange={this.updateFilter} />

        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContact}
            onDelete={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </BasicContainer>
    );
  }
}
