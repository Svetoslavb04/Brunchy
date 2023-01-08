import styles from './BasketListing.module.scss';

import { useRef } from 'react';

import useDragScrolling, { directions } from '../../hooks/useDragScrolling';

const BasketListing = ({ basket = [], className }) => {

    const mealsRef = useRef();

    useDragScrolling(mealsRef, directions.vertical, 1.4);

    const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div
            className={`${styles['basket-list-wrapper']} ${className || ''}`}
        >
            <div
                className={`basket-list ${styles['basket-list']}`}
            >
                <ul ref={mealsRef} className={styles['meals']}>
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
                <div className={styles['total-wrapper']}>
                    <p className={styles['total-text']}>Total</p>
                    <p className={styles['total']}><span>$</span> {basketValue?.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default BasketListing