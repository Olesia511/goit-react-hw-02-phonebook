import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    // const { contacts } = this.state;
    // const doubleContact = contacts.find(
    //   el =>
    //     el.contact.name.trim().toLowerCase() === contact.trim().toLowerCase()
    // );

    // if (doubleContact) {
    //   console.log(`doubleContact`);
    //   return;
    // }

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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>

        <Filter onChange={this.updateFilter} />

        <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
      </div>
    );
  }
}
