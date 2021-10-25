import styles from "./index.module.less";
export default function BlogContainer() {
    const arr = [1,2,3,4,5,6,7,8];
    return (
        <ul className={styles.blogContainer}>
            {arr.map(item => {
                return <li className={styles.blogLabel}>
                    <div className={styles.image}></div>
                    <div className={styles.labelName}></div>
                </li>
            })}
        </ul>
    )
}