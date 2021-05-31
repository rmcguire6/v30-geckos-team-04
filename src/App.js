import React from 'react';
import AppRouter from './routers/AppRouter';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <AppRouter />
    </div>
  );
}

export default App;
