import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";

export default () => {
  useEffect(async () => {
    await axios.get(
      "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"
    );
  }, []);

  return (
    <>
      <h1>示例：useEffect 结合异步函数</h1>
    </>
  );
};
