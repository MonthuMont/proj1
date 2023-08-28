import styles from "./InputPost.module.css";
import React from "react";

const InputPost = (props) => {
  let newPostEl = React.createRef();
   let addPost = () => {
    let text = newPostEl.current.value;
    props.addPostEl(text);
  };
  return (
    <div className={styles.inputBlock}>
      <h2 className={styles.h2}>My posts</h2>
      <textarea ref={newPostEl}  className={styles.textarea}>
        {/* <input 
          className={styles.input}
          type="text"
          placeholder="your news..."
        ></input> */}
      </textarea>
      <div className={styles.divButton}>
        <button onClick={addPost} className={styles.btn} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};
export default InputPost;
