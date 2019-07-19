import { Empty, Typography } from "antd";

import React from "react";

const { Paragraph } = Typography;

const FileContent = ({ text }) => {
  return !text ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  ) : (
    <div id="palindromeDataPreview">
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>{text}</Paragraph>
    </div>
  );
};

export default FileContent;
