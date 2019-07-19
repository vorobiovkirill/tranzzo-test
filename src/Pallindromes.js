import { List } from "antd";
import React from "react";

const Pallindromes = ({ pallindromes }) => {
  return (
    <div id="pallindromes">
      <List
        size="small"
        header={<h1>ПАЛЛИНДРОМЫ</h1>}
        bordered
        dataSource={pallindromes}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Pallindromes;
