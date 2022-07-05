function nTraversal(matrix) {
  var n = matrix.length;
  var ans = [];
  for (var i = n - 1; i >= 0; i--) {
    ans.push(matrix[i][0]);
  }
  var i, j;
  for (i = 1, j = 1; i < n, j < n; i++, j++) {
    ans.push(matrix[i][j]);
  }
  for (var i = n - 2; i >= 0; i--) {
    ans.push(matrix[i][n - 1]);
  }
  console.log(ans.join(" "));
}
