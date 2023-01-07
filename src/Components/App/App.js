import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';
import MealsBasket from '../MealsBasket/MealsBasket';
import { useState } from 'react';

function App() {

  const [basket, setBasket] = useState([]);

  const addToBasket = (meal) => setBasket(currentMeals => [...currentMeals, meal]);
  
  return (
    <div className={[styles['App']]}>
      <Navigation />
      <Headline />
      <Subheadline />
      <MealsList handleMealBasketClick={addToBasket} />
      <MealsBasket
        basket={basket}
        openBasketModal={openBasketModal}
      />
    </div>
  );
}

export default App;
