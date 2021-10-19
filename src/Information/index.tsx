import styles from "./index.module.less";
export default function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.informationInner}>
                <div className={styles.avatar}></div>
                <div className={styles.nickName}>逍遥客</div>
                <div className={styles.email}>wuliangjie_1996@163.com</div>
                <div className={styles.websiteDetial}>
                    <div className={styles.subDetial}>文章 30</div>
                    <div className={`${styles.subDetial} + ' ' +  ${styles.detialCenter}`}>点赞 20</div>
                    <div className={styles.subDetial}>分类 10</div>
                </div>
            </div>
        </div>
    )
}