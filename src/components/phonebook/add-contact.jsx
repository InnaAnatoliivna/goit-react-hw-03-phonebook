import Phonebook from 'components/phonebook/phonebook';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class AddContactForm extends Component {
    nameInputId = nanoid();
    numerInputId = nanoid();

    state = {
        name: '',
        number: ''
    }

    onChangeInput = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
    }

    onAddToContacts = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.addContact(name, number);
        this.setState({ name: '', number: '' })
    }

    render() {
        const { name, number } = this.state;
        return (
            <Phonebook
                nameInputId={this.nameInputId}
                numerInputId={this.numerInputId}
                handleAddContact={this.onAddToContacts}
                handleChange={this.onChangeInput}
                name={name}
                number={number}
            />
        )
    }
}

export default AddContactForm;