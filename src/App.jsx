import styles from './App.module.css';
import image from './assets/Antarac-website.png'

function App() {
  return (
    <img src={image} className={styles.img} alt="Antarac" />
  )
}

export default App
