function detectPalII(N, string) {
  var ans = string.split("").reduce((assum, b) => {
    assum[b] = assum[b] ? assum[b] + 1 : 1;
    return assum;
  }, {});
  // console.log(ans)

  // var arr = [];
  var count = 0;
  for (const key in ans) {
    // (arr.push(`${ans[key]}`));
    if (ans[key] % 2 == 1) {
      count++;
    }
  }
  // console.log(arr)
  // var count = 0;
  // for(var i=0; i<arr.length; i++){
  //     if(Number(arr[i])%2==1){
  //         count++;
  //     }
  // }
  console.log(count >= 2 ? "Not Possible!" : "Possible!");
}
// var obj={};
//     var count=0;
//     for(var i=0; i<N; i++){
//         if(obj[string[i]]==undefined){
//             obj[string[i]]=1;
//         }
//         else{
//           obj[string[i]]+=1;
//         }
//     }

//     for(var key in obj){
//         if(obj[key]%2==1){
//             count++;
//         }
//     }
//     if(count>=2){
//         console.log("Not Possible!");
//     }
//     else{
//         console.log("Possible!");
//     }
