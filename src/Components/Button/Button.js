import styles from './Button.module.scss';

const MealsBasket = ({ text, onClick }) => {

    return (
        <button
            className={styles['button']}
            onClick={onClick}
        >{text}</button>
    )
}

export default MealsBasket