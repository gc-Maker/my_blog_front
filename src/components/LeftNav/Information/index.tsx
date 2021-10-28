import styles from "./index.module.less";
import { useEffect, useState } from "react";
import {getLikeAndArticle, setLike} from "../../../utils/request";
import {Link} from "react-router-dom";
export default function Information() {
    function clickLike() {
        setLike(1).then(res => {
            const {numberOfLike} = res;
            setNumberOfLike(numberOfLike);
        })
    }

    const [numberOfLike, setNumberOfLike] = useState("");
    const [numberOfArticle, setNumberOfArticle] = useState("");
    
    useEffect(()=> {
        getLikeAndArticle().then(res => {
            const {numberOfLike, numberOfArticle} = res;
            setNumberOfLike(numberOfLike);
            setNumberOfArticle(numberOfArticle!);
        })
    }, [])


    return (

        <div className={styles.informationContainer}>
            <div className={styles.avatar}></div>
            <Link to="/home" style={{ textDecoration:'none', color: "white"}} className={styles.nickName}> 逍遥客</Link>
            <div className={styles.email}>wuliangjie_1996@163.com</div>
            <div className={styles.websiteDetial}>
                <div className={styles.subDetial}>{`文章 ${numberOfArticle}`}</div>
                <div className={`${styles.subDetial} + ' ' +  ${styles.detialCenter}`} onClick={clickLike}>{`点赞 ${numberOfLike}`}</div>
            </div>
    </div>
    )
}