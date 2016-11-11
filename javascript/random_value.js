function genSpecialValue(){
	var result = Math.random() < 0.5 ? null : undefined;
	alert(result);
	return result;
};

function genBoolean(){
	var result = Math.random() < 0.5 ? 3 > 2 : 3 < 2;
	alert(result);
	return result;
};

function genNumber(){
	var result = Math.random();
	alert(result);
	return result;
};

function genString(){
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
	alert(text);
	return result;
};

function genFunction(){
	var string = "";
	var string2 = "";
	var string3 = "";
	string += genString();
	string2 += genString();
	string3 += "return " + genString() + "+" + genString() + ";";
	var adder = new Function('a', 'b', 'return a + b');
	alert(adder);
	return adder;
};

var array_of_functions = [
    genSpecialValue,
    genBoolean,
    genNumber,
    genString,
    genFunction,
    genObject,
    genArray
]

function genRandomValue(){
	var randomnumber = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
	return array_of_functions[randomnumber]();
};

function genArray(){
	var array = new Array();
	var arraySize = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

	for (var i = 0; i <= arraySize; i++) {
		array[i] = genRandomValue();
	}
	alert(result);
};

function genObject(){
	var ret = {};
    var propertyCount= Math.random() * 10;
    for (var x = 0; x < propertyCount; x++ ){
        ret[genString()] = genRandomValue(); 
    }
    return ret;
	alert(result);
	return result;
};