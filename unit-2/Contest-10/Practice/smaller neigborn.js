function printPrevSmaller(arr, n) {
  var ans = [];
  for (var i = 0; i < n; i++) {
    var j;
    for (var j = i; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        ans.push(arr[j]);
        break;
      }
    }
    if (j == -1) {
      ans.push(-1);
    }
  }
  return ans.join(" ");
}

let arr = [39, 27, 11, 4, 24, 32, 32, 1];
let n = arr.length;
console.log(printPrevSmaller(arr, n));
