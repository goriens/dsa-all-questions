function balance(str) {
  var obj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      stack.push(str[i]);
    } else {
      var temp = str[i];
      if (obj[temp] != stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
}
var str = "()[]";
console.log(balance(str));
