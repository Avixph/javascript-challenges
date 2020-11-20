const parensAreBalanced = (input) => {
  let inputSplt = input.split("");

  return !inputSplt.reduce((prevChar, currChar) => {
    if (currChar === "(" || currChar === "{" || currChar === "[") {
      return ++prevChar;
    } else if (currChar === ")" || currChar === "}" || currChar === "]") {
      return --prevChar;
    }

    return prevChar;
  }, 0);
};

module.exports = parensAreBalanced;
