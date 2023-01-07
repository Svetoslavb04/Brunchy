import styles from './MealsBasket.module.scss';

import Button from '../Button/Button';

const MealsBasket = ({ basket = [], openBasketModal, openSuccessModal }) => {

    const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

    const handleBasketClick = () => { openBasketModal() }
    const handleOrderNowClick = () => { openSuccessModal() }

    return (
        <div id={styles['meals-basket-wrapper']}>
            <div id={styles['meals-basket']} className='meals-basket'>
                <div
                    id={styles['basket-image-wrapper']}
                    onClick={handleBasketClick}
                >
                    <img src="assets/images/shopping-basket.svg" alt="shopping basket" />
                </div>
                <p id={styles['basket-value']}>{basketValue.toFixed(2)}$</p>
                <div>
                    <Button onClick={handleOrderNowClick} text='Order Now' />
                </div>
            </div>
        </div>
    )
}

export default MealsBasket