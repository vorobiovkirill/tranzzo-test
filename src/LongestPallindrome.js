import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const LongestPallindrome = ({ longestPallindrome }) => {
  return (
    <div id="longestPallindrome">
      <Title level={3}>Самый длинный Паллиндром</Title>
      <Title level={4}>{longestPallindrome}</Title>
    </div>
  );
};

export default LongestPallindrome;
