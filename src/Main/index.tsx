import styles from "./index.module.less";
import Timeline from "../components/Timeline";
const data = [
    {
      description: "这是第一条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第二条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第三条数据",
      time: "2021-10-22"
    },
    {
      description: "这是第四条数据",
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
// import {CalendarOutlined, EditOutlined} from "@ant-design/icons";
export default function Main() {
    return (
        <main className={styles.main}>
            <Timeline TimelineData={data}/>
        </main>
    )
}