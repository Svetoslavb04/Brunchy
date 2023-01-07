import { useRef } from 'react';
import useDragScrolling, { directions } from '../../hooks/useDragScrolling';
import styles from './BasketListingModal.module.scss';

const BasketListingModal = ({ basket = [], isVisible = false }) => {

    const mealsRef = useRef();

    useDragScrolling(mealsRef, directions.vertical ,1.4);

    const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <>
            <div
                id={styles['blur-element']}

                className={`${isVisible ? styles['visible'] : styles['hidden']} blur-element`}
            ></div>
            <div
                id={styles['basket-list-wrapper']}
                className={isVisible ? styles['visible'] : styles['hidden']}
            >
                <div
                    id={styles['basket-list']}
                    className='basket-list'
                >
                    <ul ref={mealsRef} id={styles['meals']}>
                        {
                            basket.map(meal => (
                                <li key={meal.id}>
                                    <p className={styles['meal-name']}>{meal?.name}</p>
                                    <p className={styles['meal-price']}><span>$</span> {meal.price?.toFixed(2)}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles['divider']}></div>
                    <div id={styles['total-wrapper']}>
                        <p id={styles['total-text']}>Total</p>
                        <p id={styles['total']}><span>$</span> {basketValue?.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BasketListingModal