import Text from "./Text";
import styles from "./RightBlock.module.css";
import Comments from "../Myposts/Comments/Comments";
const RightBlock = (props) => {

  let dialogMessages = props.messageData1.map((el) => (
    <Text message={el.message} id={el.id}></Text>
  ));
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.h1}>{props.name}</h1>
      </div>
      <div>
        {dialogMessages}
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your message"
          ></input>
          <button className={styles.btn} type="submit">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightBlock;
