import styles from './MealCard.module.scss';

const MealCard = ({ name, caption, price, image, handleOnBasketClick }) => {

    return (
        <div className={styles['meal-card']}>
            <div className={styles['meal-content']}>
                <div
                    className={styles['meal-image']}
                >
                    <img
                        src={`assets/images/${image}`}
                        alt="meal"
                        draggable={false}
                    />
                </div>
                <h3 className={`${styles['meal-name']} ${styles['vertical-align']}`}>{name}</h3>
                <h4 className={`${styles['meal-caption']} ${styles['vertical-align']}`}>{caption}</h4>
                <h5 className={`${styles['meal-price']} ${styles['vertical-align']}`}><span>$ </span>{price.toFixed(2)}</h5>
                <div
                    className={styles['meal-basket']}
                    onClick={handleOnBasketClick}
                >
                    <img
                        src="assets/images/shopping-basket.svg"
                        alt="basket"
                        draggable={false}
                    />
                </div>
            </div>
        </div >
    )
}

export default MealCard