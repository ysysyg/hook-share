import { useState } from "react";
import { Button } from "antd";
import styles from "./index.less";

export default () => {
  const [bool, setBool] = useState(false);

  return (
    <div>
      <h1>示例：classnames</h1>
      <div
        className={`${styles.box} ${styles.border} ${bool ? styles.bg : ""}`}
      >
        Box
      </div>
      <Button onClick={() => setBool(!bool)}>setBool</Button>
    </div>
  );
};
