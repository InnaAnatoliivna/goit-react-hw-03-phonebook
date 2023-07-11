import { Component } from 'react';
import { getRandomId } from 'components/random-id'
import Head from 'components/title/head';
import Section from 'components/title/section-title';
import Contacts from 'components/contacts/contacts';
import SearchContact from 'components/contacts/SearchContact';
import AddContactForm from 'components/phonebook/add-contact';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const idContact = getRandomId();
    const dataFields = {}
    const isContact = contacts.find(contact => contact.name === name);
    if (!isContact) {
      dataFields.name = name;
      dataFields.number = number;
      dataFields.id = idContact;
      this.setState(prevState => ({
        contacts: [...prevState.contacts, dataFields]
      }));
    } else {
      alert(`${name} is already in contacts`)
    }
  };

  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  onFilteringInput = (e) => {
    const searchValue = e.target.value.trim();
    this.setState({ filter: searchValue })
  }

  render() {

    const { contacts, filter } = this.state;
    const filteredContacts = contacts
      .filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))

    return (
      <div className='container'>
        <Head headTitle='Phonebook' />

        <AddContactForm addContact={this.addContact} />

        <Section title='Contacts'>
          <SearchContact
            handleSearchInput={this.onFilteringInput}
            searchTitle='Find contacts by name'
            arrayContacts={contacts}
          />
          <Contacts
            arrayContacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>

      </div>
    );
  };
};