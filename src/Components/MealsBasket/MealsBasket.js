import styles from './MealsBasket.module.scss';

import Button from '../Button/Button';

const MealsBasket = ({ basket = [], openBasketModal, handleOrder }) => {

    const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

    const handleBasketClick = () => { openBasketModal() }

    return (
        <div className={styles['meals-basket-wrapper']}>
            <div className={`${styles['meals-basket']} meals-basket`}>
                <div
                    className={styles['basket-image-wrapper']}
                    onClick={handleBasketClick}
                >
                    <img src="assets/images/shopping-basket.svg" alt="shopping basket" />
                </div>
                <p className={styles['basket-value']}>{basketValue.toFixed(2)}$</p>
                <div>
                    <Button className="order-now-button" onClick={handleOrder} text='Order Now' />
                </div>
            </div>
        </div>
    )
}

export default MealsBasket