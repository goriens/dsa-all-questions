function Neigh(arr, n) {
  var ans = [];
  var stack = [];
  for (var i = 0; i < n; i++) {
    while (stack.length != 0 && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }

  return ans.join(" ");
}

let arr = [39, 27, 11, 4, 24, 32, 32, 1];
let n = arr.length;
console.log(Neigh(arr, n));
