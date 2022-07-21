function runProgram(input) {
  var data = input.trim().split("\n");
  var t = +data[0];
  var test = 1;
  var names = [];
  var marks = [];
  for (var i = 0; i < t; i++) {
    var [name, mark] = data[test++].trim().split(" ");
    names.push(name);
    marks.push(+mark);
  }
  sortnames(names, marks);
  sortmarks(names, marks);
  printRank(names, marks);
}
function checkstring(str1, str2) {
  var n = str1.length;
  var m = str2.length;
  for (var i = 0; i < Math.min(n, m); i++) {
    if (str1[i] != str2[i]) {
      if (str1[i] > str2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function sortnames(names, marks) {
  var n = names.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (checkstring(names[j], names[j + 1]) == true) {
        swap(names, marks, j, j + 1);
      }
    }
  }
  return names;
}
function sortmarks(names, marks) {
  var n = marks.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (marks[j] < marks[j + 1]) {
        swap(names, marks, j, j + 1);
      }
    }
  }
  return marks;
}
function swap(names, marks, j, min) {
  var temp = names[j];
  names[j] = names[min];
  names[min] = temp;

  temp = marks[j];
  marks[j] = marks[min];
  marks[min] = temp;
}
function printRank(names, marks) {
  var count = 0;
  var rank = 1;
  var previous = -1;
  var n = names.length;
  for (var i = 0; i < n; i++) {
    if (marks[i] == previous) {
      console.log(rank, names[i]);
    } else {
      rank = rank + count;
      count = 0;
      console.log(rank, names[i]);
    }
    count++;
    previous = marks[i];
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
