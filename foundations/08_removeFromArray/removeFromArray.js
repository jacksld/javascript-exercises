// Remove selected arguments from the provided array
const removeFromArray = function(array, valueToRemove) {
    // Takes multiples arguments
    // Find the exact matches of provided arguments in the array
    // Remove those elements from the array
        // Remove a single element from the array
    let removingIndex = array.indexOf(valueToRemove);
    array.splice(removingIndex, 1);
    // Return the removed array
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
