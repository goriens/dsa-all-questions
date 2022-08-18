function printNGE(arr, n) {
  var stack = [];
  let res = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (stack.length != 0) {
      while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
    }
    res[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  console.log(res);
}

let arr = [1, 1, 2, 4, 3];
let n = arr.length;
printNGE(arr, n);
