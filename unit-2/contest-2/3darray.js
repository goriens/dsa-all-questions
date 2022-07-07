function Array3D(N, M, K, array) {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
      var ans = [];
      for (var p = 0; p < K; p++) {
        ans.push(array[i][j][p]);
      }
      console.log(ans.join(" "));
    }
  }
}
