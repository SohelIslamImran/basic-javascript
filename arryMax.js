var marks = [45, 57, 30, 28, 75, 98, 40, 38];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log('Highest value is ', max);