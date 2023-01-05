import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import Headline from '../Headline/Headline';
import Subheadline from '../Subheadline/Subheadline';

function App() {
  return (
    <div className={[styles['App']]}>
      <Navigation></Navigation>
      <Headline></Headline>
      <Subheadline></Subheadline>
      <div id={styles['meals-list']}></div>
      <div id={styles['basket']}></div>
    </div>
  );
}

export default App;
