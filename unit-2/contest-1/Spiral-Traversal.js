function spiralTraversal(N, arr) {
  var top = 0;
  var bottom = N - 1;
  var left = 0;
  var right = N - 1;
  var newArr = [];
  var count = 0;
  while (count < N * N) {
    for (var i = top; i <= bottom; i++) {
      newArr.push(arr[i][left]);
      count++;
    }
    left++;

    for (var i = left; i <= right; i++) {
      newArr.push(arr[bottom][i]);
      count++;
    }
    bottom--;

    for (var i = bottom; i >= top; i--) {
      newArr.push(arr[i][right]);
      count++;
    }
    right--;

    for (var i = right; i >= left; i--) {
      newArr.push(arr[top][i]);
      count++;
    }
    top++;
  }
  console.log(newArr);
}

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var N = arr.length;
console.log(spiralTraversal(N, arr));
