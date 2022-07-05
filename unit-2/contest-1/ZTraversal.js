function zTraversal(N, arr) {
  var ans = [];
  for (var i = 0; i < N - 1; i++) {
    ans.push(arr[0][i]);
  }
  var temp = 0;
  for (var i = N - 1; i >= 0; i--) {
    ans.push(arr[temp][i]);
    temp++;
  }
  for (var i = 1; i < N; i++) {
    ans.push(arr[N - 1][i]);
  }
  console.log(ans.join(" "));
}
