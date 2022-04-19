import React from 'react';
import styles from './style.css';
import MyImage from './assets/images/image.jpg';

const App = ({ title }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <img className={styles.image} src={MyImage} alt="test image" />
  </>
)
  

export default App; 