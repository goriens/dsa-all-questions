function zTraversal(arr, N) {
  var start = 0;
  var end = N - 1;
  var k = 0;
  var bag = "";

  //   for (var i = 0; i < N; i++) {
  //     bag = bag + arr[i][i] + " ";
  //   }
  start = 1;
  end = end - 1;
  while (start < N && end >= 0) {
    bag = bag + arr[start][end] + " ";
    start++;
    end--;
  }
  //   for (var i = 1; i < N; i++) {
  //     bag = bag + arr[N - 1][i] + " ";
  //   }

  console.log(bag);
}
var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
zTraversal(mat, 3);
