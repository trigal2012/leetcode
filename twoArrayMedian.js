/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var newArr = [];
  var tempNum = 0;
  nums1.filter(function(x){
  	return newArr.push(x);
  });

  nums2.filter(function(x){
  	return newArr.push(x);
  });
  newArr.sort(function(a, b){return a - b});

  var length = newArr.length/2;

  if(newArr.length%2 == 0){
  	tempNum = (newArr[length - 1] + newArr[length])/2;
  } else{
  	tempNum = (newArr[Math.floor(length)]);
  }

  return tempNum; 
};

findMedianSortedArrays([1,2,9,10,11,12],[3,3,4,6,7,12,13]);
