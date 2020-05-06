// Given a string of brackets or paired-brackets, determine if the provided
// sequence is valid(balanced). Returning 'true' if balanced or 'false' if not.
// Example input: "[{}]()"
// Example output: true
// Example input: "[{]}"
// Example output: false
// Example input: "}{"
// Example output: false
function isValidPair(opening, closing) {
  const bracketPairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  return bracketPairs[opening] === closing;
}
function isBalanced(str) {
  // split str into array
  // create two arrays of opening and closing brackets
  // if splitStr[0] is equal to a closing bracket - then we're done
  // interate through split array
  //
}
