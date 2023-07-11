import css from 'components/title/head.module.css'

const Head = ({ headTitle }) => {
    return (
        <h1 className={css.title}>{headTitle}</h1>
    )
}

export default Head;