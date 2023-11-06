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

  render() {
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
        {/* {console.log(`++++ state APP `, this.state)} */}
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
