import styles from "./Text.module.css";
const Text = (props) => {
  return (
    <div className={styles.block}>
      <img
        className={styles.img}
        src="https://tntmusic.ru/media/content/article@2x/2020-09-23_14-09-32__6727a1a8-fda6-11ea-8704-ed48d94479f9.jpg"
      ></img>{" "}
      <div className={styles.userText}>
        <p className={styles.comments}>{props.message}</p>
      </div>
    </div>
  );
};
export default Text;
