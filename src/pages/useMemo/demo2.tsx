import React, { useState, useMemo } from "react";
import { Button } from "antd";

export default () => {
  const [count, setCount] = useState(0);

  const [bool, setBool] = useState(true);

  const result = useMemo(() => {
    console.log("计算");
    return count * 2;
  }, [count]);

  return (
    <>
      <h1>示例：useMemo</h1>
      <span>{count}</span>
      <span>{result}</span>
      <span>{bool ? "真" : "假"}</span>
      <Button onClick={() => setCount(count + 1)}>+ 1</Button>
      <Button onClick={() => setBool(!bool)}>setBool</Button>
    </>
  );
};
