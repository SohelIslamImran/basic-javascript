var num = [3, 5, 2, 6, 3, 5, 8, 6, 2, 8, 6, 5, 0, 8, 4, 3];
var uniqueNum = [];

for (var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}

console.log(uniqueNum);