//give an array of numbers, find the smallest missing positive integer
//i.e
//[1,2,0] should return 3
//[7,8,11,5,4]  should return 1
//[] should return 1
//[3,-1,0,2,-1] should return 1

function findPositive(nums){
	
	//remove duplicates, sort, remove items less than 1
	var tmpArray = nums.sort((a,b) => a - b).filter(notPositive);

	function notPositive(value, index, array){
		return value > 0 && value != array[index - 1];
	}

	function getMyNumber(){
		for(var i = 0; i < tmpArray.length; i++){
			if(tmpArray[0] > 1){
				return 1;
			}else if((tmpArray[i] + 1) != tmpArray[i+1]){
				return (tmpArray[i] + 1);
			}
		}
	}

	if(tmpArray.length == 0){
		return 1;
	}else {
		return getMyNumber();
	}
}

console.log(findPositive([]));
