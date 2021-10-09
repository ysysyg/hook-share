import React, { useState, memo } from "react";
import { Button } from "antd";

const Foo = memo(() => {
  console.log("Foo 组件重新渲染了");
  return <div>我是Foo组件</div>;
});

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>示例：memo</h1>
      <span>{count}</span>
      <Button onClick={() => setCount((count) => count + 1)}>+1</Button>
      <Foo />
    </div>
  );
};
