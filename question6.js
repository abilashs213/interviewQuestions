(function () {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  setTimeout(function () {
    console.log(3);
  }, 0);

  console.log(4);
})();

// //anonymous function
// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function (y) {
//       return x + y;
//     };
//   }
// }

for (var i = 0; i < 5; i++) {
  setTimeout(console.log(i), 1000);
}

// console.log(sum(2)(3));
