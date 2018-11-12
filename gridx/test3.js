var knapsack = function(goal, bucket) {
// memoization store contains max gain for nth item for each weight limit.
var memo = [];
for (var item = 0; item < bucket.length; item++) {
memo[item] = [];
for (var weightLim = 0; weightLim <= goal; weightLim++) {
if(item == 0 || weightLim <= 0){
memo[item][weightLim] = bucket[item].weight > weightLim ? 0 : bucket[item].gain ;
}else if (bucket[item].weight <= weightLim) {
// gain if item taken is equals to : gain of this item + 
// max gain for remaininng weight for prev items.
var itemTakenGain = bucket[item].gain + memo[item — 1][weightLim — bucket[item].weight];
// gain if item NOT taken is equals to : max gain of this weight for prev items.
var itemDiscardGain = memo[item — 1][weightLim];
// Max of above two the maximum gain if for this weight limit and item num of items.
memo[item][weightLim] = Math.max(itemTakenGain, itemDiscardGain);
} else {
memo[item][weightLim] = memo[item — 1][weightLim];
}
}
}
return memo[item-1][goal];
}

console.log(‘max — ‘ + knapsack(50, [{
weight: 10,
gain: 60
}, {
weight: 20,
gain: 100
}, {
weight: 30,
gain: 120
}]));