var twoSum = function(nums, target){
 var index = [];
 for(i=0; i<nums.length; i++){
  for(j=1; j<nums.length; j++){
    if(nums[i] + nums[i+j] == target){
      return index = [i, i+j];
    }
  }
 }
};
