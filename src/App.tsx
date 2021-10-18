import  styles from "./App.module.less"
// import {Button} from "antd";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.left}>
            gc_Maker
          </div>
          <ul className={styles.right}>
            <li>主页</li>
            <li>时间线</li>
            <li>标签</li>
            {/* <li>abc</li> */}
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.writing}></div>
        <div className={styles.personInformation}>
          <div className={styles.personInformationInner}>
            <div className={styles.avatar}></div>
            <div className={styles.nickName}>逍遥客</div>
            <div className={styles.email}>wuliangjie_1996@163.com</div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </React.Fragment>
  );
}

export default App;
