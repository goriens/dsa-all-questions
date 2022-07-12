function isUniq(arr, n, k) {
  var count = 0;
  var x, y;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr[i] + arr[j] === k) {
        x = i;
        y = j;
      }
    }
  }
  console.log(arr[x], arr[y]);
}
var arr = [2, 7, 9, 11];
var k = 9;
var n = 3;
isUniq(arr, n, k);
