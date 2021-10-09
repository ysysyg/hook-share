import React, { useState, memo, useCallback } from "react";
import { Button } from "antd";

const Foo = memo((props: any) => {
  console.log("Foo 组件渲染了");
  return (
    <div>
      我是Foo组件
      <Button onClick={props.resetCount}>resetCount</Button>
    </div>
  );
});

export default () => {
  const [count, setCount] = useState(0);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h1>示例：useCallback</h1>
      <span>{count}</span>
      <Button onClick={() => setCount((count) => count + 1)}>+1</Button>
      <Foo resetCount={resetCount} />
    </div>
  );
};
