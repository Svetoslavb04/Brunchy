import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';
import MealsList from '../MealsList/MealsList';

function App() {
  return (
    <div className={[styles['App']]}>
      <Navigation></Navigation>
      <Headline></Headline>
      <Subheadline></Subheadline>
      <MealsList></MealsList>
      <div id={styles['basket']}></div>
    </div>
  );
}

export default App;
