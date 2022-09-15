function check(str) {
  var ans = "";
  for (let i = 0; i < str.length; i++) {
    let count = str[i];
    for (var j = 0; j < count; j++) {
      ans = ans + str[i - 1];
    }
  }
  console.log(ans);
}

check("a2b3c2");
