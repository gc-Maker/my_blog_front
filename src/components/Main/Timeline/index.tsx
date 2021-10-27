import { FieldTimeOutlined } from '@ant-design/icons';
import styles from "./index.module.less";
interface Props{
    TimelineData: TlData []
}
interface TlData{
    description: string;
    time: string;
}

const TimelineData = [
    {
      description: "这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据\n这是第一条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第五条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第六条数据",
      time: "2021-10-22"
    },
  ]
export default function Timeline(props: Props) {

    // const {TimelineData} = props;
    let length = TimelineData.length;
    return(
        <ul className={styles.TlContainer}>
            {
                TimelineData.map((item, index) => {
                    return <li className={styles.TlItem}>
                        <FieldTimeOutlined className={styles.TlIcon} style={{fontSize:24, color: 'white'}}/>
                        <div className={styles.TlTail}></div>
                        <div className={styles.TlContent}>
                            <div className={styles.detail}>{item.description}</div>
                            <div className={styles.time}>{item.time}</div>
                        </div>
                        {length === index+1 ? <div className={styles.last}></div> : ""}
                    </li>
                })
            }
        </ul>
    )
}