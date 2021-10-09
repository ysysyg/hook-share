import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

export default () => {
  useEffect(() => {
    return () => {
      console.log("组件被卸载了");
    };
  });

  return (
    <>
      <h1>示例：useEffect 执行时机</h1>
      <h2>组件被卸载之前执行</h2>
      <Button
        onClick={() =>
          ReactDOM.unmountComponentAtNode(
            document.getElementById("root") as any
          )
        }
      >
        卸载
      </Button>
    </>
  );
};
