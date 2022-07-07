function footBallTournament(n, A) {
  var ans = A.reduce((accum, b) => {
    accum[b] = accum[b] ? accum[b] + 1 : 1;
    return accum;
  }, {});
  var print = Object.keys(ans).reduce((a, b) => (ans[a] < ans[b] ? b : a));
  console.log(print);
}
