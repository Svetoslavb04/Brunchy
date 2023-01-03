import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <div id={styles['navigation']}></div>
      <div id={styles['headline']}></div>
      <div id={styles['sub-headling']}></div>
      <div id={styles['meals-list']}></div>
      <div id={styles['basket']}></div>
    </div>
  );
}

export default App;
