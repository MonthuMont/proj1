let a = 65;
import styles from "./Comments.module.css";
const Comments = (props) => {
  return (
    <div className={styles.block}>
      <div>
        <div>
          <img
            className={styles.img}
            src="https://tntmusic.ru/media/content/article@2x/2020-09-23_14-09-32__6727a1a8-fda6-11ea-8704-ed48d94479f9.jpg"
          ></img>{" "}
          <p className={styles.comments}>{props.message}</p>
        </div>
        <div className={styles.likesBlock}>
          <img
            className={styles.like}
            src="https://mywebicons.ru/i/png/1eeed36fb023d446c083f8b02f712075.png"
          ></img>
          <p className={styles.counter}>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};
export default Comments;
