import styles from "./index.module.less";
import {CalendarOutlined, EditOutlined} from "@ant-design/icons";
export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.mainInner}>
                <h1>标题</h1>
                <div className={styles.articleContainer}>
                    <div className={styles.articleCover}>
                        <div className={styles.describe}>1</div>
                        <div className={styles.title}>文章标题</div>
                        <div className={styles.detial}>
                            <CalendarOutlined /> 2021-10-19  <EditOutlined /> 逍遥客
                        </div>
                        <div className={styles.label}>4</div>
                    </div>
                    <div className={styles.articleCover}></div>
                    <div className={styles.articleCover}></div>
                    <div className={styles.articleCover}></div>
                    <div className={styles.articleCover}></div>
                    <div className={styles.articleCover}></div>
                </div>
            </div>
        </main>
    )
}