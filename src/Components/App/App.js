import styles from './App.module.scss';

import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';
import MealsBasket from '../MealsBasket/MealsBasket';
import BasketListing from '../BasketListing/BasketListing';
import SuccessfulOrder from '../SuccessfulOrder/SuccessfulOrder';
import Modal from '../Modal/Modal';

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
        || target.classList.contains('order-now-button')
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
        <Modal isVisible={isBasketModalVisible}>
          <BasketListing basket={basket} />
        </Modal>
        <MealsBasket
          basket={basket}
          openBasketModal={() => setIsBasketModalVisible(true)}
          handleOrder={handleOrder}
        />
        <Modal
          isVisible={isSuccessModalVisible}
        >
          <SuccessfulOrder onButtonClick={() => setIsSuccessModalVisible(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
