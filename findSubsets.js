/**
* Given a set of distinct integers, nums, return all possible subsets (the power set).
* Note: The solution set must not contain duplicate subsets.
* Example:
* Input: nums = [1,2,3]
* Output:
* [
*   [3],
*   [1],
*   [2],
*   [1,2,3],
*   [1,3],
*   [2,3],
*   [1,2],
*   []
* ]
*/
function getAllSubsets (nums){ 
      var theArray = nums.reduce(
      	(subsets, value) => subsets.concat(subsets.map(set => [value,...set]))
      	,[[]]);

      return theArray;
}
console.log(getAllSubsets([3,5,7]));
