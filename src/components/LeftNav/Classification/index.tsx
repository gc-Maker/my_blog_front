import styles from "./index.module.less";
import { useEffect, useState } from "react";
import { getLabel, Label } from "../../../utils/request";
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
                    <div className={styles.label}>
                        {item.labelName + ' ' + item.number}
                    </div>
                )
            }
        </div>
    )
}