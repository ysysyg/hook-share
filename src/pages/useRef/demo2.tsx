import React, { useState } from "react";
import { Button } from "antd";
import { useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  let timerID: any = null;

  useEffect(() => {
    timerID = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  const stop = () => {
    console.log("开始清除定时器");
    clearInterval(timerID);
  };

  return (
    <>
      <h1>示例：保存数据（跨组件周期）</h1>
      <p>{count}</p>
      <Button onClick={stop}>停止</Button>
    </>
  );
};
