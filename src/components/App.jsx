import { Component } from 'react';
import { getRandomId } from 'components/random-id'
import Head from 'components/title/head';
import Section from 'components/title/section-title';
import Contacts from 'components/contacts/contacts';
import SearchContact from 'components/SearchContact/SearchContact';
import AddContactForm from 'components/add-contact/add-contact';
import { saveToLocalStorage, loadContacts } from 'components/local-storage/local-storage';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  KEYlocalStorage = 'savedContacts';

  componentDidMount() {
    const getSaveContacts = loadContacts(this.KEYlocalStorage);
    getSaveContacts && this.setState({ contacts: getSaveContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLocalStorage(this.KEYlocalStorage, this.state.contacts);
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const idContact = getRandomId();
    const dataFields = { name: name, number: number, id: idContact }
    const isContact = contacts.find(contact => contact.name === dataFields.name);
    if (!isContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, dataFields]
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  }

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