import React, { forwardRef } from "react";
import styles from "./index.module.less";
import Information from "./Information";
import Classification from "./Classification";
export default forwardRef((props, ref: React.ForwardedRef<any>) => {
    return (
        <div className={styles.leftNav} ref={ref}>
            <Information />
            <Classification />
        </div>
    )
})
