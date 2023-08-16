import styles from "./InputPost.module.css";
const InputPost = () => {
  return (
    <div className={styles.inputBlock}>
      <h2 className={styles.h2}>My posts</h2>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="your news..."
        ></input>
      </div>
      <div className={styles.divButton}>
        <button className={styles.btn} type="submit">Submit</button>
      </div>
    </div>
  );
};
export default InputPost;
