import { IoMdContact } from 'react-icons/io';
import css from 'components/contacts/savedContact.module.css'

const SavedContact = ({ contact }) => {
    return (
        <li className={css.item} key={contact.name}
        >
            <p className={css.itemText}>
                <IoMdContact className={css.icon} />
                {contact.name}: {contact.number}
            </p>
            <button
                className={css.btn}
                type='button'
                data-id={contact.id}
            >
                Delete
            </button>
        </li>
    )
}

export default SavedContact;
