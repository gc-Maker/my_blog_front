import styles from "./index.module.less";
import {Input, Form, Button} from "antd";
import { createTimelineData } from "../../../utils/request";
const {Item} = Form;
const {TextArea} = Input;
export default function WriteTimelineData() {
    function onFinish(value: any) {
        const {event} = value;
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const createTime = year + "-" + month + "-" + date;
        createTimelineData({event, createTime});
    }
    return(
        <Form 
            className={styles.container}
            onFinish={onFinish}>
            <Item name="event">
                <TextArea className={styles.shadow} autoSize={{minRows: 5}}/>
            </Item>
            <Item>
                <Button className={styles.shadow} htmlType="submit">按钮</Button>
            </Item>
        </Form>
    )
}