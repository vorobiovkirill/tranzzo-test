import "./App.css";

import { Button, Layout } from "antd";
import React, { useState } from "react";
import { highlightPalindrome, palindromeChecker } from "./helpers";

import FileContent from "./FileContent";
import HighlightedPallindromes from "./HighlightedPallindromes";
import LongestPallindrome from "./LongestPallindrome";
import Pallindromes from "./Pallindromes";

const { Content } = Layout;

const App = () => {
  const [text, setText] = useState("");
  const [pallindromes, setPallindromes] = useState([]);
  const [longestPallindrome, setLongestPallindrome] = useState("");
  const [highlightedText, setHighlightedText] = useState(null);

  const findPallindroms = () => {
    const splitedText = text.split(/\s*,\s*/);
    const palindromeData = splitedText.filter(palindromeChecker);
    const longestPalindrome = palindromeData.sort(
      (a, b) => b.length - a.length
    )[0];
    setPallindromes(palindromeData);
    setLongestPallindrome(longestPalindrome);
    setHighlightedText(highlightPalindrome(text, palindromeData));
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
    setText("");
    setPallindromes([]);
    setLongestPallindrome("");
    file.value = "";
    setHighlightedText("");
  };

  return (
    <Layout>
      <Content>
        <input type="file" onChange={uploadFile} />
        <FileContent text={text} />
        <Pallindromes pallindromes={pallindromes} />
        <LongestPallindrome longestPallindrome={longestPallindrome} />
        <HighlightedPallindromes highlightedText={highlightedText} />
        <Button
          block
          disabled={!text ? true : false}
          icon="search"
          onClick={findPallindroms}
          size="large"
          type="primary"
        >
          Find Pallindromes
        </Button>
        <Button
          block
          disabled={!text ? true : false}
          icon="delete"
          onClick={clear}
          size="large"
          type="dashed"
        >
          Reset
        </Button>
      </Content>
    </Layout>
  );
};

export default App;
