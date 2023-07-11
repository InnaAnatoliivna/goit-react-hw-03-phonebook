import css from 'components/phonebook/phonebook.module.css'

const Phonebook = ({ nameInputId, numerInputId, handleAddContact, handleChange, number, name }) => {

    return (
        <>
            <form className={css.form} onSubmit={handleAddContact}>
                <label className={css.label} htmlFor={nameInputId}>Name</label>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    required
                />
                <label className={css.label} htmlFor={numerInputId}>Number</label>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        </>
    )

}

export default Phonebook;