import styles from "./index.module.less";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
            <div className={styles.left}>
                gc_Maker
            </div>
            <ul className={styles.right}>
                <li>主页</li>
                <li>时间线</li>
                <li>标签</li>
                {/* <li>abc</li> */}
            </ul>
            </div>
        </header>
    )
}