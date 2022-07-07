function isPrime(n) {
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}
function matrixPrimeCheck(N, M, arr) {
  var count = 0;
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
      var n = arr[i][j];
      if (isPrime(n) === true) {
        count++;
      }
    }
  }
  console.log(count);
}
