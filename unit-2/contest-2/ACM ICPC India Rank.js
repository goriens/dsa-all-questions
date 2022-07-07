function ACM_ICPC_India_Rank(N, countriesArr) {
  var india = "India";
  var count = 0;
  for (var i = 0; i < N; i++) {
    count++;
    if (countriesArr[i] === india) {
      break;
    }
  }
  console.log(count);
}
