import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const FileContent = ({ text }) => {
  return (
    <div id="palindromeDataPreview">
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>{text}</Paragraph>
    </div>
  );
};

export default FileContent;
