console.log('in test 2');

// Complexity is n log(n)
var source = [9, 2, 7, 11, 1, 3, 14, 22];
var kthMax = function(minInd, MaxInd, kth) {
  // pivotInd stores the pivot position 
  // for current iteration
  var temp, pivotInd = minInd;
  if (minInd >= MaxInd) {
    return source[pivotInd];
  }
  for (var i = minInd; i < MaxInd; i++) {
   //If an element is greater than chosen pivot (i.e. last element)
   //Swap it with pivotPointer element,then increase pointer
   if (source[i] > source[MaxInd]) {
     temp = source[i];
     source[i] = source[pivotInd];
     source[pivotInd] = temp;
     pivotInd++;
   }
  }
  // we have found position for pivot elem. 
  // swap it to that position place .
  temp = source[pivotInd];
  source[pivotInd] = source[MaxInd];
  source[MaxInd] = temp;
  // Only try to sort the part in which kth index lies.
  if (kth > pivotInd) {
   return kthMax(pivotInd + 1, MaxInd, kth);
  } else if (kth < pivotInd) {
  return kthMax(minInd, pivotInd—1, kth);
  } else {
   return source[pivotInd];
  }
}
// last argument is kth-1 , so if 2 is given,
// it will give you 3rd max which is 11
console.log(kthMax(0, source.length — 1, 2));
