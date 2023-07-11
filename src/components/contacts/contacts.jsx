import SavedContact from 'components/contacts/savedContact'
import css from 'components/contacts/contacts.module.css'

const Contacts = ({ arrayContacts, onDeleteContact }) => {

    const handleClick = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.getAttribute('data-id');
            onDeleteContact(id);
        }
    }

    return (
        <div>
            {arrayContacts.length > 0 ?
                (<ul onClick={handleClick}>
                    {arrayContacts.map(contact => (
                        <SavedContact
                            arrayContacts={arrayContacts}
                            key={contact.id}
                            contact={contact}
                        />
                    ))}

                </ul>
                )
                : (<p className={css.text}>The contact list is empty.</p>)
            }
        </div>
    )
}

export default Contacts;