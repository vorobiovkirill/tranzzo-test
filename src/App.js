import "./App.css";

import React, { Fragment, useState } from "react";
import { highlightPalindrome, palindromeChecker } from "./helpers";

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
      const preview = document.getElementById("show-text");
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      const textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function(event) {
          setText(event.target.result);
          preview.innerHTML = event.target.result;
        };
      } else {
        preview.innerHTML =
          "<span class='error'>It doesn't seem to be a text file!</span>";
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
    <Fragment>
      <input type="file" onChange={uploadFile} />
      <div id="show-text">Choose text File</div>
      <div id="palindromeDataPreview" />
      <button type="button" onClick={findPallindroms}>
        Find Pallindroms
      </button>
      <button type="button" onClick={clear}>
        Clear
      </button>
      <div id="pallindromes">
        <ul>
          {pallindromes.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div id="longestPallindrome">{longestPallindrome}</div>
      <div id="textWithPallindromes" />
    </Fragment>
  );
};

export default App;
