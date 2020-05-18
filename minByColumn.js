/*
for a database table like this:

where the columns are a,b,c,d

a   b   c     d
0   2   3     1
1   5   0     null
5   0   ''    -1
-1  0   null  'abc'
0   0   0     0


an array of the above would look like this:
[
  { a: 0,  b: 5, c: 3,    d: 1 },
  { a: 1,  b: 5, c: 0,    d: null },
  { a: 5,  b: 0, c: '',   d: -1 },
  { a: -1, b: 0, c: null, d: 'abc' },
  { a: 0,  b: 0, c: 0,    d: 0 }
]

Create a function that given the above array and a column name, 
return the object which contains the lowest value for that column.

For example, 
with this array:
[
  { a: 0,  b: 5, c: 3,    d: 1 },
  { a: 1,  b: 0, c: 0,    d: null },
  { a: 5,  b: 0, c: '',   d: -1 },
  { a: -1, b: -1, c: null, d: 'abc' },
  { a: 0,  b: 0, c: 0,    d: 0 }
]

and column "c" the function should return
{ a: 1,  b: 5, c: 0,    d: null }

if the column were "d", the function should return
{ a: 5,  b: 0, c: '',   d: -1 }

if the column were "b", the function should return
{ a: -1, b: -1, c: null, d: 'abc' }
 
--------------
null and strings can be treated as zero (0)
if there is more than one value for the minimum, return the first object with that value

*/
	
	tempArr=[];
	tempArrSorted=[];
function minByColumn(arr, col){

	arr.forEach(consoleLog);

	arr.forEach(getObj);

	function consoleLog(item){
		console.log(item);
	}

	function getObj(item, index){
		if(!Number.isInteger(item[col]) || Number.isNaN(item[col])){
			tempArr.push(0);
		}else {
			tempArr.push(item[col]);
		}
	}

	tempArrSorted = tempArr.slice().sort(function(a,b){return a-b});

	console.log("this is tempArr: " + tempArr);
	console.log(tempArr.indexOf(-1));

	console.log("this is tempArrSorted: " + tempArrSorted);
	console.log(tempArrSorted[0]);

	return (arr[tempArr.indexOf(tempArrSorted[0])]);

}


console.log(minByColumn([ {"a": 1, "b": 0, "c": 42, "d": 0},
  {"a": 2, "b": 2, "c": 100, "d": 0},
  {"a": 0, "b": 0, "c": 25, "d": 4} ],"c"));
