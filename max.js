var business = 950;
var minister = 1800;
var sochib = 780;
console.log(typeof sochib);
if (business > minister) {
    if (business > sochib) {
        console.log('business is bigger');
    }
    else {
        console.log('sochib is bigger');
    }
}
else {
    if (minister > sochib) {
        console.log('minister is bigger');
    }
    else {
        console.log('sochib is bigger');
    }
}

var max = Math.max(business, minister, sochib);
console.log(max);