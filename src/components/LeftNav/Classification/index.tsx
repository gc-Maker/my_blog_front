import styles from "./index.module.less";
import { useEffect, useState } from "react";
import { getLabel, Label, ArticleDesc, getArticleDesc } from "../../../utils/request";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
function Classification(props: any) {
    const [labelArr, setLabelArr] = useState<Label>([]);
    useEffect(()=> {
        getLabel().then((v)=> {
            setLabelArr(v);
        }, (r)=> {
            // 错误处理
        });
    },[])

    function labelClick(e: any) {
        // 获取标签对应的id
        const labelId = e.target.id;
        getArticleDesc(labelId).then(v=> {
            console.log(v);
            props.setArticleDesc(v);
        }, r=> {
            console.log(r);
        })
    }
    return (
        <div className={styles.labelContainer} onClick={(e)=> {labelClick(e)}}>
            {
                labelArr.map(item =>
                    <Link to="/articles" style={{ textDecoration:'none', color: "white"}} className={styles.label} key={item.id} id={String(item.id)}>
                            {item.labelName + ' ' + item.number}
                    </Link>
                )
            }
        </div>
    )
}

function setDesc(dispatch: any) {
    return {
        setArticleDesc: (article: ArticleDesc[])=> {
            dispatch({type: 'SET', data: article});
        }
    }
}

export default connect(null, setDesc)(Classification);