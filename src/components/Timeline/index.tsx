import { FieldTimeOutlined } from '@ant-design/icons';
import styles from "./index.module.less";
interface Props{
    TimelineData: TlData []
}
interface TlData{
    description: string;
    time: string;
}
export default function Timeline(props: Props) {

    const {TimelineData} = props;
    let length = TimelineData.length;
    return(
        <ul className={styles.TlContainer}>
            {
                TimelineData.map((item, index) => {
                    return <li className={styles.TlItem}>
                        <FieldTimeOutlined className={styles.TlIcon} style={{fontSize:24, color: 'white'}}/>
                        <div className={styles.TlTail}></div>
                        <div className={styles.TlContent}>{item.time + item.description}</div>
                        {length === index+1 ? <div className={styles.last}></div> : ""}
                    </li>
                })
            }
        </ul>
    )
}