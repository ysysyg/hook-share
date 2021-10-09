import React, { useState } from "react";
import { Button } from "antd";

export default () => {
  let [count, setCount] = useState<number>(0);

  function normalUpdate() {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  }

  function functionUpdate() {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  }

  return (
    <>
      <h1>示例：设置状态⽅法的使⽤细节</h1>
      <span>{count}</span>
      <Button onClick={normalUpdate}>+ 1 普通更新</Button>
      <Button onClick={functionUpdate}>+ 1 函数式更新</Button>
    </>
  );
};
