import { Empty, Typography } from "antd";

import React from "react";

const { Paragraph } = Typography;

const HighlightedPallindromes = ({ highlightedText }) => {
  return !highlightedText ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  ) : (
    <div id="textWithPallindromes">
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
      </Paragraph>
    </div>
  );
};

export default HighlightedPallindromes;
