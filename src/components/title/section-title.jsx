import css from 'components/title/section-title.module.css'

const Section = ({ title, children }) => {
    return (
        <>
            <h2 className={css.title}>{title}</h2>
            {children}
        </>
    )
}

export default Section;