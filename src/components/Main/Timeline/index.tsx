import { FieldTimeOutlined } from '@ant-design/icons';
import styles from "./index.module.less";
import {getTimelineData, TimelineData} from "../../../utils/request";
import {useEffect, useState} from "react";
interface Props{
    TimelineData: TlData []
}
interface TlData{
    description: string;
    time: string;
}

export default function Timeline(props: Props) {
    const [timelineData, setTimelineData] = useState<TimelineData[]>([]);
    useEffect(()=> {
        getTimelineData().then(v=> {
            setTimelineData(v);
        }, r=> {
            // 错误处理
        });
    }, [])

    return(
        <ul className={styles.TlContainer}>
            {
                timelineData.map((item, index) => {
                    return <li className={styles.TlItem}>
                        <FieldTimeOutlined className={styles.TlIcon} style={{fontSize:24, color: 'white'}}/>
                        <div className={styles.TlTail}></div>
                        <div className={styles.TlContent}>
                            <div className={styles.detail}>{item.event}</div>
                            <div className={styles.time}>{item.createTime}</div>
                        </div>
                        {timelineData.length === index+1 ? <div className={styles.last}></div> : ""}
                    </li>
                })
            }
        </ul>
    )
}