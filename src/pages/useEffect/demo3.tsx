import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  return (
    <>
      <h1>示例：useEffect 数据监测</h1>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}>+ 1</Button>
    </>
  );
};
