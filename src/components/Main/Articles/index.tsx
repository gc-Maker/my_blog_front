import styles from "./index.module.less";
const arr = [1,2,3,4,5,6];
export default function Articles() {
    return(
        <div className={styles.articlesContainer}>
            {
                arr.map(item => {
                    return <div className={styles.article}>
                        <div className={styles.coverImg}></div>
                        <div className={styles.title}>这是一个文章的标题</div>
                        <div className={styles.time}>2021-10-25</div>
                        {/* <div className={styles.label}>这是标签所在行</div> */}
                    </div>
                })
            }
        </div>
    )
}