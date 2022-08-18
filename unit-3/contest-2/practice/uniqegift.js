function Gift(str) {
  var queue = [];
  var count = {};
  var ans = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!(char in count)) {
      count[char] = 1;
    } else {
      count[char]++;
    }
    queue.push(char);

    while (queue.length > 0) {
      var firstQueue = queue[0];
      if (count[firstQueue] == 1) {
        break;
      }
      queue.shift();
    }
    if (queue.length === 0) {
      ans = ans + "#";
    } else {
      ans += queue[0];
    }
  }
  console.log(ans);
}
var str = "abcabc";
Gift(str);
