import styles from './App.module.scss';

import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';
import MealsBasket from '../MealsBasket/MealsBasket';
import BasketListingModal from '../BasketListingModal/BasketListingModal';

function App() {

  const [basket, setBasket] = useState([]);

  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const handleAppClick = (e) => {

    const target = e.target;

    if (
      isBasketModalVisible
      && !target.closest('.meals-basket')
      && !target.closest('.basket-list')
    ) {
      setIsBasketModalVisible(false)
    }
  }

  const addToBasket = (meal) => setBasket(currentMeals => [...currentMeals, meal]);
  const addToBasket = (meal) => setBasket(currentMeals => [...currentMeals, { ...meal, id: currentMeals.length }]);

  const openBasketModal = () => setIsBasketModalVisible(true);

  return (
    <div className={[styles['App']]}>
    <div
      className={[styles['App']]}
      onClick={handleAppClick}
    >
      <Navigation />
      <Headline />
      <Subheadline />
      <MealsList handleMealBasketClick={addToBasket} />
      <MealsBasket
        basket={basket}
        openBasketModal={openBasketModal}
      />
      <div id={styles['basket-wrapper']}>
        <BasketListingModal
          basket={basket}
          isVisible={isBasketModalVisible}
        />
        <MealsBasket
          basket={basket}
          openBasketModal={openBasketModal}
        />
      </div>
    </div>
  );
}

export default App;
