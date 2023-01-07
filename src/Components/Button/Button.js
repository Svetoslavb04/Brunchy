import styles from './Button.module.scss';

const MealsBasket = ({ className, text, onClick }) => {

    return (
        <button
            className={`${styles['button']} ${className}`}
            onClick={onClick}
        >{text}</button>
    )
}

export default MealsBasket