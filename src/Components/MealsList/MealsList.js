import styles from './MealsList.module.scss';

import { useRef } from 'react';
import useHorizontalDrag from '../../hooks/useHorizontalDrag';

import meals from '../../assets/data.json';

import MealCard from '../MealCard/MealCard';

const MealsList = () => {

    const mealsListRef = useRef();

    useHorizontalDrag(mealsListRef, 1.4);

    const handleAddToBasket = () => {

    }

    return (
        <div
            ref={mealsListRef}
            className={styles['meals-list']}
        >
            {
                meals.items.map(
                    meal =>
                        <MealCard
                            key={meal.name + meal.caption + meal.price}
                            name={meal.name}
                            caption={meal.caption}
                            price={meal.price}
                            image={meal.image}
                            handleOnBasketClick={handleAddToBasket}
                        />
                )
            }
        </div>
    )
}

export default MealsList