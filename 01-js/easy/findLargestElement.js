/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    max=numbers[0]
    for (const ele of numbers) {
        max=Math.max(max,ele)
    }
    return max
}

module.exports = findLargestElement;