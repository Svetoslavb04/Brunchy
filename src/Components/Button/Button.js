import styles from './Button.module.scss';

const MealsBasket = ({ id, className, text, onClick }) => {

    return (
        <button
            id={id}
            className={`${styles['button']} ${className}`}
            onClick={onClick}
        >{text}</button>
    )
}

export default MealsBasket