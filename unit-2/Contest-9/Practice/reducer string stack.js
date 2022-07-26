function reduce(str) {
  let Stack = [];
  var i = 0;
  while (i < str.length) {
    if (Stack.length === 0 || str[i] != Stack[Stack.length - 1]) {
      Stack.push(str[i]);
      i++;
    } else {
      Stack.pop();
      i++;
    }
  }
  console.log(Stack.join(""));
}

let str = "aaabccddd";
reduce(str);
