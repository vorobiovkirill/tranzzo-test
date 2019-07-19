export const palindromeChecker = str => {
  const lowRegStr = str.toLowerCase().replace(/[\s.,%]/g, "");

  const reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");

  return reverseStr === lowRegStr;
};

export const highlightPalindrome = (text, words, tag) => {
  tag = tag || "mark";

  for (let i = 0; i < words.length; i++) {
    const palindromeRegExp = new RegExp(words[i], "g");

    if (palindromeRegExp.test(text)) {
      text = text.replace(palindromeRegExp, `<${tag}>$&</${tag}>`);
    }
  }
  return text;
};
