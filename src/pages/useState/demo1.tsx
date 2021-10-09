import React, { useState } from "react";
import { Button } from "antd";

export default (props: any) => {
  let [count, setCount] = useState(() => props.count || 0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>示例：useState 细节</h1>
      <span>{count}</span>
      <Button onClick={handleCount}>+ 1</Button>
    </>
  );
};
