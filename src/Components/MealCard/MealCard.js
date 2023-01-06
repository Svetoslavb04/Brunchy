import styles from './MealCard.module.scss';

const MealCard = ({ name, caption, price, image, handleOnBasketClick }) => {

    return (
        <div className={styles['meal-card']}>
            <div
                className={styles['meal-image']}
                style={{ backgroundImage: `url("assets/images/${image}")` }}
            ></div>
            <h3 className={styles['meal-name']}>{name}</h3>
            <h4 className={styles['meal-caption']}>{caption}</h4>
            <h5 className={styles['meal-price']}><span>$ </span>{price.toFixed(2)}</h5>
            <div
                className={styles['meal-basket']}
                onClick={handleOnBasketClick}
            >
                <img src="assets/images/shopping-basket.svg" alt="basket" />
            </div>
        </div>
    )
}

export default MealCard