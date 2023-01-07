import styles from './App.module.scss';

import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';
import MealsBasket from '../MealsBasket/MealsBasket';
import BasketListingModal from '../BasketListingModal/BasketListingModal';
import SuccessModal from '../SuccessModal.js/SuccessModal';

function App() {

  const [basket, setBasket] = useState([]);

  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleAppClick = (e) => {

    const target = e.target;

    if (
      isSuccessModalVisible
      && !target.closest('.success-modal')
    ) {
      setIsSuccessModalVisible(false)
    }

    if (
      isBasketModalVisible
      && (
        (
          !target.closest('.meals-basket') && !target.closest('.basket-list'))
        || target.id === 'order-now-button'
      )
    ) {

      setIsBasketModalVisible(false)
    }
  }

  const addToBasket = (meal) =>
    setBasket(currentMeals => [...currentMeals, { ...meal, id: currentMeals.length }]);

  const handleOrder = () => {

    setIsSuccessModalVisible(true)
    setBasket([])
    
  }

  return (
    <div
      className={[styles['App']]}
      onClick={handleAppClick}
    >
      <Navigation />
      <Headline />
      <Subheadline />
      <MealsList handleMealBasketClick={addToBasket} />
      <div id={styles['basket-wrapper']}>
        <BasketListingModal
          basket={basket}
          isVisible={isBasketModalVisible}
        />
        <MealsBasket
          basket={basket}
          openBasketModal={() => setIsBasketModalVisible(true)}
          handleOrder={handleOrder}
        />
        <SuccessModal
          isVisible={isSuccessModalVisible}
          closeModal={() => setIsSuccessModalVisible(false)}
        />
      </div>
    </div>
  );
}

export default App;
