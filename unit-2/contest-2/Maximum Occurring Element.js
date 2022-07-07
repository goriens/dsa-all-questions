function maximumOccuringElement(A, N) {
  var ans = A.reduce((accum, b) => {
    accum[b] = accum[b] ? accum[b] + 1 : 1;
    return accum;
  }, {});

  console.log(ans);
  // var obj = {};
  // for(var i=0; i<N; i++){
  //     if(obj[A[i]] === undefined){
  //         obj[A[i]]= 1;
  //     }
  //     else{
  //         obj[A[i]] = obj[A[i]]+  1 ;
  //     }
  // }
  // // console.log(obj)
  // var max = -Infinity;
  // var index = 0;
  // for(key in obj){
  //     if(max < obj[key]){
  //         max = obj[key];
  //         index = key;
  //     }
  // }
  // console.log(index);

  // var print = Object.keys(ans).reduce((a, b) => ans[a] < ans[b] ? b : a);
  // console.log(print);
}
