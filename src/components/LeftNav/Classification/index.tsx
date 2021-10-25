import styles from "./index.module.less";

export default function Classification() {
    const dataArr = ["html", "css", "javaScript", "性能优化","html", "css", "javaScript", "性能优化","html", "css", "javaScript", "性能优化"]
    return (
        <div className={styles.labelContainer}>
            {
                dataArr.map(item => {
                    return <div className={styles.label}>
                        {item}
                    </div>
                })
            }
        </div>
    )
}