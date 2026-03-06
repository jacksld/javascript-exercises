const leapYears = function (year) {
    // IF year is divisible by 4 AND not divisible by 100
    // OR year is divisible by 400 THEN
    if (((year % 4 == 0) && (year % 100 != 0)) ||
        (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
