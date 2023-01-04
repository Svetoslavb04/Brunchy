import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className={[styles['App']]}>
      <Navigation></Navigation>
      <div id={styles['headline']}></div>
      <div id={styles['sub-headling']}></div>
      <div id={styles['meals-list']}></div>
      <div id={styles['basket']}></div>
    </div>
  );
}

export default App;
