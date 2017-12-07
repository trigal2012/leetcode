/*Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true*/

var isNumber = function(s) {
	if(!s.trim()){
		return false;
	}else{
		return !isNaN(s);
	};
};

console.log(isNumber(" 3 "));
