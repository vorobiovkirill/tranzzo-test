import "./App.css";

import { Button, Divider, Layout } from "antd";
import React, { Fragment, useState } from "react";
import { highlightPalindrome, palindromeChecker } from "./helpers";

import FileContent from "./FileContent";
import LongestPallindrome from "./LongestPallindrome";
import Pallindromes from "./Pallindromes";

const { Content } = Layout;

const App = () => {
  const [pallindromes, setPallindromes] = useState([]);
  const [longestPallindrome, setLongestPallindrome] = useState("");
  const [text, setText] = useState("");

  const highlightedWrapper = document.getElementById("textWithPallindromes");

  const findPallindroms = () => {
    const splitedText = text.split(/\s*,\s*/);
    const palindromeData = splitedText.filter(palindromeChecker);
    const longestPalindrome = palindromeData.sort(
      (a, b) => b.length - a.length
    )[0];
    setPallindromes(palindromeData);
    setLongestPallindrome(longestPalindrome);
    highlightedWrapper.innerHTML = highlightPalindrome(text, palindromeData);
  };

  const uploadFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      const textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function(event) {
          setText(event.target.result);
        };
      } else {
        setText("It doesnt seem to be a text file!");
      }
      reader.readAsText(file, "cP1251");
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  const clear = () => {
    const file = document.querySelector("input[type=file]");
    const preview = document.getElementById("show-text");
    setText("");
    setPallindromes([]);
    setLongestPallindrome("");
    file.value = "";
    preview.innerHTML = "";
    highlightedWrapper.innerHTML = "";
  };

  return (
    <Layout>
      <Content>
        <input type="file" onChange={uploadFile} />
        <Divider>Text</Divider>
        <FileContent text={text} />
        <Divider>Text</Divider>
        <Pallindromes pallindromes={pallindromes} />

        <Divider>Text</Divider>
        <LongestPallindrome longestPallindrome={longestPallindrome} />
        <Divider>Text</Divider>
        <div id="textWithPallindromes" />
        <Divider>Text</Divider>
        <Button
          type="primary"
          size="large"
          block
          onClick={findPallindroms}
          icon="search"
        >
          Find Pallindroms
        </Button>
        <Button type="dashed" size="large" block onClick={clear} icon="delete">
          Clear
        </Button>
      </Content>
    </Layout>
  );
};

export default App;
