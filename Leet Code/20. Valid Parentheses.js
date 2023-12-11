function isValid(s) {
  let stack = [];
  for (let c of s) {
    console.log(stack);
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      if (!stack.length ||
        (c === ')' && stack[stack.length - 1] !== '(') ||
        (c === '}' && stack[stack.length - 1] !== '{') ||
        (c === ']' && stack[stack.length - 1] !== '[')) {
        return false;
      }
      stack.pop();
    }
  }
  // console.log(!stack.length)
  return !stack.length;
}

let s = "{[]}{}{}{()}"

isValid(s);