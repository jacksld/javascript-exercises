const sumAll = function (firstValue, secondValue) {
    // Check if the values are not integers and if they are negative
    if ((firstValue < 0) ||
        (secondValue < 0) ||
        (!Number.isInteger(firstValue)) ||
        (!Number.isInteger(secondValue))) {
        // Return error if they are
        return "ERROR";
    } else {
        // Determine which value is smaller
        // Create a variable to store the smaller value
        let smallerValue = firstValue < secondValue ? firstValue : secondValue;
        const otherValue = firstValue < secondValue ? secondValue : firstValue;
        let sum = smallerValue;
        // Repeat this until the smaller value is equal to the other value
        while (smallerValue < otherValue) {
            // Plus one to the smaller value to get the next number in the range
            smallerValue += 1;
            sum += smallerValue;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
