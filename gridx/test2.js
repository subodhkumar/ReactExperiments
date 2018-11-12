/* const tf = (min, max) => {
  if (min >= max) return;

  let pvt = min;
  let ci, temp;

  for (ci = min; ci < max; ci++) {
    if (darr[ci] < darr[max]) {
      temp = darr[ci];
      darr[ci] = darr[pvt];
      darr[pvt] = temp;
      pvt++;
    }
  }

  temp = darr[pvt];
  darr[pvt] = darr[max];
  darr[max] = temp;

  console.log('*** | ', darr);

  tf(min, pvt - 1);
  tf(pvt + 1, max);
};

const darr = [11, 9, 5, 8, 14, 1, 78, 25, 15];

console.log(darr);
tf(0, darr.length - 1);
console.log(darr); */

// var fibo = (comp, number) => {
//   // return 1;
//   if (number < 3) return 1;
//   if (comp[number]) return comp[number];
//   else {
//     comp[number - 1] = fibo(comp, number - 1);
//     comp[number - 2] = fibo(comp, number - 2);

//     return comp[number - 1] + comp[number - 2];
//   }
// };

// console.log(fibo({}, 4));

// const darr = [11, 9, 5, 8, 14, 1, 78, 25, 15];

// console.log(darr);
// var lh = darr.splice(0, 3);
// var rh = darr;

// console.log(lh);
// console.log(rh);

// function* foo(x) {
//   var y = 2 * (yield x + 1);
//   var z = yield y / 3;
//   return x + y + z;
// }

// var it = foo(5);

// // note: not sending anything into `next()` here
// console.log(it.next()); // { value:6, done:false }
// console.log(it.next(12)); // { value:8, done:false }
// console.log(it.next(13)); // { value:42, done:true }

(() => {
  console.log('called new');
})();
