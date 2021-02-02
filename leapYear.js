function isLeapYear(year) {
    let checkYear = year % 4;
    if (checkYear == 0) {
        return 'Your year is a leapyear.';
    }
    else {
        return 'Your year is not a leapyear.';
    }
}
const check200 = isLeapYear(2021)
console.log(check200);