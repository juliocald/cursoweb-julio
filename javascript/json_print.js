function printSpecialValue(specialValue){
	return specialValue + ",<br>";
};

function printBoolean(boolean){
	return boolean + ",<br>";
};

function printNumber(number){	
	return number + ",<br>";
};

function printString(string){
	return string + ",<br>";
};

function printValue(value){
	var dataType = typeof value;
	// alert(dataType);
	switch (dataType) {
		case "string":
		printString(value);
		break;
		case "number":
		printNumber(value);
		break;
		case "boolean":
		printBoolean(value);
		break;
		case "undefined":
		printSpecialValue(value);
		break;
		case "object":
		printObject(value);
		break;
	}
};

function genRandomValueNew(){
	var randomnumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
	return array_of_functions[randomnumber]();
};

function printAnything(){
	var array = new Array();
	var numberOfElements = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
	alert(numberOfElements);
	for (var i = 0; i < numberOfElements; i++){
		array[i] = genRandomValueNew();
	}

	var string = "{<br>";
	for (var i = 0; i < array.length; i++){
		string += "&#09;" + printString(array[i]) + "<br>";
	}
	string += "<br>}";

	var newString = JSON.stringify(string);
	// alert(newString);
	document.getElementById("result").innerHTML = newString;
};