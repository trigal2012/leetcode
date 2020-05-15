function getAllSubsets (nums){ 
      var theArray = nums.reduce(
      	(subsets, value) => subsets.concat(subsets.map(set => [value,...set]))
      	,[[]]);

      return theArray;
      /*return theArray.sort(function(a,b){
      	return a.length - b.length
      });*/
}
console.log(getAllSubsets([1,2,3]));
