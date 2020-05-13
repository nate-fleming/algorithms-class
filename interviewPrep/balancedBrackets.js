// Given a string of brackets or paired-brackets, determine if the provided
// sequence is valid(balanced). Returning 'true' if balanced or 'false' if not.
// Example input: "[{}]()"
// Example output: true
// Example input: "[{]}"
// Example output: false
// Example input: "}{"
// Example output: false

function isBalanced(str) {
  let stack = [];
  const bracketPairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let bracket of str) {
    if (!bracketPairs[bracket]) {
      stack.push(bracket);
    } else {
      const lastTag = stack.pop();
      if (lastTag !== bracketPairs[bracket]) return false;
    }
  }

  return !stack.length;
}

console.log(isBalanced("[{}]()"));
