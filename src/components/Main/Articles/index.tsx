import styles from "./index.module.less";
import { useEffect, useState } from "react";
import { getArticleDesc,  ArticleDesc} from "../../../utils/request";
export default function Articles() {
    const [articleDesc, setArticleDesc] = useState<ArticleDesc[]>([]);
    function onMouseEvent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const currentTarget = e.currentTarget;
        const coverImg = currentTarget.children[0];
        coverImg.classList.toggle(`${styles.coverImgHover}`);
    }
    useEffect(()=> {
        getArticleDesc().then(v=> {
            setArticleDesc(v);
        }, r=> {
            // 错误处理
        });
    }, [])
    return(
        <div className={styles.articlesContainer}>
            {
                articleDesc.map(item => {
                    return <div className={styles.article} onMouseEnter={(e) => {onMouseEvent(e)}} onMouseLeave={(e)=> {onMouseEvent(e)}}>
                        <div className={styles.coverImg}></div>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.time}>{item.ctime}</div>
                    </div>
                })
            }
        </div>
    )
}