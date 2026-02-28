const reverseString = function(string) {
    // Separate string to array items
    let letters = string.split("");
    let reversedLetters = [];
    // Get every single letter from the string
    for (let i = 0; i < letters.length; i++) {
        // Add each letter to the new array from the beginning
        reversedLetters.unshift(letters[i]);
    }
    // Join the reversed letter together to form a string again
    return reversedLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
