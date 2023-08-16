import styles from './Comments.module.css'
const Comments = () => {
    return(

        <div >
            <div className={styles.block}><img className={styles.img} src='https://tntmusic.ru/media/content/article@2x/2020-09-23_14-09-32__6727a1a8-fda6-11ea-8704-ed48d94479f9.jpg'></img> <p className={styles.comments}>Hey, How are you?</p></div>
            <div className={styles.block}><img className={styles.img} src='https://tntmusic.ru/media/content/article@2x/2020-09-23_14-09-32__6727a1a8-fda6-11ea-8704-ed48d94479f9.jpg'></img> <p className={styles.comments}>Hey, How are you?</p></div>
            <div className={styles.block}><img className={styles.img} src='https://tntmusic.ru/media/content/article@2x/2020-09-23_14-09-32__6727a1a8-fda6-11ea-8704-ed48d94479f9.jpg'></img> <p className={styles.comments}>Hey, How are you?</p></div>
        </div>
    )
}
export default Comments;