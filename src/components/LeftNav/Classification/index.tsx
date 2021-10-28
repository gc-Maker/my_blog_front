import styles from "./index.module.less";
import { useEffect, useState } from "react";
import { getLabel, Label } from "../../../utils/request";
import {Link} from "react-router-dom";
export default function Classification() {
    const [labelArr, setLabelArr] = useState<Label>([]);
    useEffect(()=> {
        getLabel().then((v)=> {
            setLabelArr(v);
        }, (r)=> {
            // 错误处理
        });
    },[])
    return (
        <div className={styles.labelContainer}>
            {
                labelArr.map(item =>
                    <Link to="/articles" style={{ textDecoration:'none', color: "white"}} className={styles.label}>
                            {item.labelName + ' ' + item.number}
                    </Link>
                )
            }
        </div>
    )
}