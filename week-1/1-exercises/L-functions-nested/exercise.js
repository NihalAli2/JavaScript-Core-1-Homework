function percentage(num1, num2) {
 var roundPercentage =  Math.round((num1 / (num1 + num2)) * 100); 
 return roundPercentage;
}
var result = percentage(15, 8);
console.log(result);

// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";
