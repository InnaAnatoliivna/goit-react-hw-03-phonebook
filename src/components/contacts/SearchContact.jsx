import css from 'components/contacts/searchContact.module.css'

const SearchContact = ({ handleSearchInput, searchTitle, arrayContacts }) => {
    return (
        arrayContacts.length > 0 && (
            <div className={css.wrapper}>
                <h3 className={css.title}>{searchTitle}</h3>
                <input
                    className={css.input}
                    type="text"
                    onInput={handleSearchInput}
                />
            </div>
        ));
}


export default SearchContact;