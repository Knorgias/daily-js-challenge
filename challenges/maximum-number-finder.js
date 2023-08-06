/**
 * Challenge 1: Find the Largest Number

Description: Write a JavaScript function that takes an array of numbers as input and returns the largest number from the array.

Instructions:

Define a function called findLargestNumber that takes a parameter numbers.
Inside the function, find and return the largest number from the numbers array.
Test your function with different arrays of numbers.
Example:

Input: [4, 9, 2, 7, 5]
Output: 9

You have 5 minutes to solve this challenge. Go ahead and give it a try! If you have any questions or need assistance, feel free to ask. Happy coding!
 */

// challenges.js

function findLargestNumber(nums) {
  if (nums.length === 0) return null;

  let largestNumber = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (largestNumber < nums[i]) {
      largestNumber = nums[i];
    }
  }
  return largestNumber;
}

module.exports = {
  findLargestNumber,
};
