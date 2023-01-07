import styles from './MealsBasket.module.scss';

const MealsBasket = ({ basket = [], openBasketModal }) => {

    const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

    const handleBasketClick = () => { openBasketModal() }

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
                    <button
                        id={styles['order-now-button']}
                    >Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default MealsBasket