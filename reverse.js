
function reverseString(str) {
    var reverse = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = 'I am a web developer. And also a programmer.';
var statement = reverseString(speech);
console.log(statement);