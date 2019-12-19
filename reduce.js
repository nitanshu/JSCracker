var a = [10, 20, 30];
var total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(total) // Prints 60