/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numsLength = nums.length%2 > 0 ? (Math.round(nums.length/2)) : (1 + nums.length/2);
    console.log(numsLength);
    var majority = '';
    var tempArr = nums;
    var tempArrSorted = nums.sort();
    console.log(tempArrSorted);
   	console.log("----");
    tempArrSorted.map(function thing(data){
		console.log(tempArrSorted.lastIndexOf(data));
		console.log(tempArrSorted.indexOf(data))
		console.log("----");
		if((tempArrSorted.lastIndexOf(data) - tempArrSorted.indexOf(data)) + 1 >= numsLength){
    		majority = data;
    	}
    })
    return majority;
};

console.log(majorityElement([3,2,3]));
