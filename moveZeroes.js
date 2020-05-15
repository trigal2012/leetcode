/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    nums.forEach(function (item, index, arr){
    	if(arr[index] == 0){
    		tmp = arr.indexOf(item);
    		nums.splice(tmp, 1);
    		nums.push(0);
    	}
    	console.log(nums);
    })
};

moveZeroes([0,1,0,1,0,0,1,0,3,12]);
