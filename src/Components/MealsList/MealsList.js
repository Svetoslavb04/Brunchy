import styles from './MealsList.module.scss';

import { useRef } from 'react';
import useHorizontalDrag, { directions } from '../../hooks/useDragScrolling';

import meals from '../../assets/data.json';

import MealCard from '../MealCard/MealCard';

const MealsList = ({ handleMealBasketClick }) => {

    const mealsListRef = useRef();

    useHorizontalDrag(mealsListRef, directions.horizontal, 1.4);

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
                            handleOnBasketClick={handleMealBasketClick.bind(null, meal)}
                        />
                )
            }
        </div>
    )
}

export default MealsList