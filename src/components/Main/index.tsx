import styles from "./index.module.less";
import {Route, Redirect, Switch} from "react-router-dom";
import Timeline from "./Timeline";
import Articles from "./Articles";
import WriteTimelineData from "./WriteTimelineData";
// import {CalendarOutlined, EditOutlined} from "@ant-design/icons";
export default function Main() {
    return (
        <main className={styles.main}>
            <Switch>
                <Route path="/home" component={Timeline}/>
                <Route path="/articles" component={Articles}/>
                <Route path="/timeline" component={WriteTimelineData}/>
                <Redirect to="/home"/>
            </Switch>
        </main>
    )
}