import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';
import MealsBasket from '../MealsBasket/MealsBasket';
import { useState } from 'react';

function App() {

  const [basket, setBasket] = useState([]);

  const basketValue = basket.reduce((acc, curr) => acc + curr.price, 0);

  const addToBasket = (meal) => setBasket(currentMeals => [...currentMeals, meal]);
  
  return (
    <div className={[styles['App']]}>
      <Navigation></Navigation>
      <Headline></Headline>
      <Subheadline></Subheadline>
      <MealsList handleMealBasketClick={addToBasket}></MealsList>
      <MealsBasket value={basketValue}></MealsBasket>
    </div>
  );
}

export default App;
