import React, { useState } from "react";
import { Button } from "antd";

export default (props: any) => {
  let [count, setCount] = useState<number>(() => {
    return props.count || 0;
  });

  function handleCount() {
    setCount((count) => count + 1);
    document.title = `${count}`;
  }

  return (
    <>
      <h1>示例：设置状态⽅法的使⽤细节</h1>
      <span>{count}</span>
      <Button onClick={handleCount}>+ 1</Button>
    </>
  );
};
