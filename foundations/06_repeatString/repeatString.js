const repeatString = function(string, repeatTime) {
    if (repeatTime < 0) return "ERROR";
    let repeatingString = "";
    for (let i = 0; i < repeatTime; i++) {
        repeatingString += string;
    }
    return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
