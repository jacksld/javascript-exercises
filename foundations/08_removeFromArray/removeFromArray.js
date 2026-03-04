const removeFromArray = function (array) {
    const args = Array.from(arguments);
    // Form an array of removing elements
    const removingElements = args.slice(1);
    // Going through every elements in the removing array
    for (let i = 0; i < removingElements.length; i++) {
        // Remove until all occurrences of the value is removed from the array
        while (array.includes(removingElements[i])) {
            // Remove the element based on its index in the original array
            let removingIndex = array.indexOf(removingElements[i]);
            array.splice(removingIndex, 1);
        }
    }
    // Return the removed array
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
