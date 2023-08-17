import styles from './Dialog.module.css'
const Dialog = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.leftblock}>
                <h1 className={styles.h1}>Dialogs</h1>
                <ul className={styles.listItem}>
                    <li className={styles.item}>Andy</li>
                    <li className={styles.item}>Wolt</li>
                    <li className={styles.item}>Donald</li>
                    <li className={styles.item}>Vladimir</li>
                </ul>
            </div>
            <div className={styles.rightblock}>RIGHT</div>
        </div>
    )
};
export default Dialog;