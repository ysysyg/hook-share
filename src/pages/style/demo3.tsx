import classnames from "classnames";
import styles from "./index.less";

export default () => {
  return (
    <div>
      <h1>示例：flex</h1>
      <div className={classnames(styles.center, styles.box, styles.border)}>
        Box: 上下左右居中
      </div>
    </div>
  );
};
