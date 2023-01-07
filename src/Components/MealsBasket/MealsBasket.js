import styles from './MealsBasket.module.scss';

const MealsBasket = ({ value = 0 }) => {
    return (
        <div id={styles['meals-basket-wrapper']}>
            <div id={styles['meals-basket']}>
                <div id={styles['basket-image-wrapper']}>
                    <img src="assets/images/shopping-basket.svg" alt="shopping basket" />
                </div>
                <p id={styles['basket-value']}>{value.toFixed(2)}$</p>
                <div>
                    <button id={styles['order-now-button']}>Order Now</button>
                </div>
            </div>

        </div>
    )
}

export default MealsBasket