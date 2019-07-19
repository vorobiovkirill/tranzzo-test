import { List } from "antd";
import React from "react";

const Pallindromes = ({ pallindromes }) => {
  return (
    <div id="pallindromes">
      <List
        size="small"
        bordered
        dataSource={pallindromes}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Pallindromes;
