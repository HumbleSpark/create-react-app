import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <p className={styles.App} children="Welcome to React" />
    );
  }
}

export default App;
