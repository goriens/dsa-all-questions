function dayOfTheWeek(day, N) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var num = N % 7;

  var bag = 0;
  for (var i = 0; i < days.length; i++) {
    if (day === days[i]) {
      bag = i;
    }
  }
  //   console.log(num,"-------" , bag)
  var index = bag + num;
  console.log(index >= 7 ? days[index - 7] : days[index]);
  // console.log(index-7)
}
