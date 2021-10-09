import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default () => {
  let [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <h1>示例：useEffect 执行时机</h1>
      <h2>组件挂载完成之后执行</h2>
      <h2>组件数据更新完成之后执行</h2>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}>+ 1</Button>
    </>
  );
};
