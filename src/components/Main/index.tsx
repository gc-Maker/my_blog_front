import styles from "./index.module.less";
import {Route, Redirect, Switch} from "react-router-dom";
import Timeline from "./Timeline";
import Articles from "./Articles";
// import {CalendarOutlined, EditOutlined} from "@ant-design/icons";
export default function Main() {
    return (
        <main className={styles.main}>
            <Switch>
                <Route path="/home" component={Timeline}/>
                <Route path="/articles" component={Articles}/>
                <Redirect to="/home"/>
            </Switch>
        </main>
    )
}