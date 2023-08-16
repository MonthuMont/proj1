import { useState } from "react";

import styles from "./App.module.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Hello')

  function increment() {
    setLikes(likes + 1)
  }
  const decrement = () => {
    setLikes(likes - 1)
  };

  return (
    <div className={styles.lol}>
      <h1 className={styles.title}>{likes}</h1>
      <h1 className={styles.title}>{value}</h1>
      <input onChange={ event => setValue(event.target.value)} type="text" value={value} className={[styles.title, styles.btn].join(' ')}></input>
      <button onClick={increment} className={styles.btn}>
        Increment
      </button>
      <button
        onClick={decrement}
        className={[styles.btn, styles.btn1].join(" ")}
      >
        Decrement
      </button>
      <div>
        <Compon></Compon>
      </div>
    </div>
  );
} 
const Compon = () => {
  return(
    <div>
      <div>
        <h1>Hello mafaka</h1>
        <ul>
          <li>dwqfqwfqw</li>
          <li>q decrementqd qd  </li>
        </ul>
      </div>
    </div>
  )
}
export default App;

