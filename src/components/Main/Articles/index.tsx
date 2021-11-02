import styles from "./index.module.less";
import { connect } from "react-redux";
// import { useEffect, useState } from "react";
import { ArticleDesc} from "../../../utils/request";
interface Props {
    articleDesc: ArticleDesc[];
}
function Articles(props: Props) {
    // const [articleDesc, setArticleDesc] = useState<ArticleDesc[]>([]);
    function onMouseEvent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const currentTarget = e.currentTarget;
        const coverImg = currentTarget.children[0];
        coverImg.classList.toggle(`${styles.coverImgHover}`);
    }

    // useEffect(()=> {
    //     getArticleDesc().then(v=> {
    //         setArticleDesc(v);
    //     }, r=> {
    //         // 错误处理
    //     });
    // }, [])
    return(
        <div className={styles.articlesContainer}>
            {
                props.articleDesc.map(item => {
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

function getDesc(state: any) {
    return {articleDesc: state.articleDesc}
}

export default connect(getDesc, null)(Articles);