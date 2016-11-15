function calcAverage(){
	var result = 0;
	if(arguments.length == 0){
		result = undefined;
	} else {
		for (var i = 0; i < arguments.length; ++i){
			// alert(arguments[i]);
			result += arguments[i];
		}
		result = result / arguments.length;
	}
	alert(result);
	return result;
};
