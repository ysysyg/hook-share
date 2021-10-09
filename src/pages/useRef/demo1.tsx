import React, { useRef } from "react";

export default () => {
  const username = useRef<any>();

  const onChange = () => {
    console.log(username);
  };

  return (
    <>
      <h1>示例：获取 DOM 元素对象</h1>
      <input type="text" ref={username} onChange={onChange} />
    </>
  );
};
