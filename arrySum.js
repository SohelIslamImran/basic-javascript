var numbers = [45, 67, 34, 49, 83, 55, 26];
var sum = 0;
for (i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}

console.log('total : ', sum);

function arraySum(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var total = arraySum([79, 90, 34, 62, 28, 54, 129, 54, 83, 75, 265, 38, 62]);
console.log(total);

var total2 = arraySum([79, 90, 34, 62, 28, 54, 129,]);
console.log(total2);