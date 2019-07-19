import { Empty, Typography } from "antd";

import React from "react";

const { Title } = Typography;

const LongestPallindrome = ({ longestPallindrome }) => {
  return !longestPallindrome ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  ) : (
    <div id="longestPallindrome">
      <Title level={4}>{longestPallindrome}</Title>
    </div>
  );
};

export default LongestPallindrome;
