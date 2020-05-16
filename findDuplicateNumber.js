/*
FindDuplicateNumber

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space. (it requires the same amount of time regardless of the input size.)
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	var duplicte = '';
	var tempArr = nums;
	tempArr.map(function thing(data){
		if(tempArr.indexOf(data) !== tempArr.lastIndexOf(data)){
			duplicate = data;
		}
	})
    return duplicate;
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,1,3,4,2,4,5,5,3]));
