// import Header from "./Header";
// import BlogContainer from "./BlogContainer";
import Main from "./components/Main";
import Information from "./components/LeftNav";
import React from "react";
import styles from "./App.module.less";
import {useRef} from "react";
function App() {
  const informationRef: React.MutableRefObject<any> = useRef();
  function navClick() {
    const information = informationRef.current;
    information.classList.toggle(`${styles.active}`)
  }
  return (
    <div className={styles.App}>
      {/* <Header /> */}
      {/* <BlogContainer /> */}
      <div className={styles.button} onClick={navClick}>按钮</div>
      <Information ref={informationRef}/>
      <Main />
    </div>
  );
}

export default App;
