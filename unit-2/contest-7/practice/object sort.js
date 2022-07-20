let data = [
  { name: "rancho", marks: 45 },
  { name: "chatur", marks: 32 },
  { name: "raju", marks: 30 },
  { name: "farhan", marks: 28 },
  { name: "virus", marks: 32 },
  { name: "joy", marks: 45 },
];

data.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
data.sort((a, b) => {
  return b.marks - a.marks;
});

// data.sort((a, b) => {
//   if (a.name.toLowerCase() < b.name.toLowerCase()) {
//     return b.marks.localeCompare(a.marks) - a.marks && -1;
//   }
// });

let ranks = data.map((e) => e.marks).sort((a, b) => b - a);

let ranked = data.map((e) => ({
  ...e,
  rank: ranks.indexOf(e.marks) + 1,
}));

// console.log(ranked);

ranked.forEach((e) => {
  console.log(`${e.rank} ${e.name}`);
});
