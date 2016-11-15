function Style(){
	this.result = "";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

Style.prototype.print = function(){
	this.result += "<style>";

    this.result += "body {background-color: " + getRandomColor() + ";} "

    this.result += "h1 {color: " + getRandomColor() + ";} "

    this.result += "p {color: " +getRandomColor() + ";}</style>";

    document.write(this.result);
}

function Header(){
	this.style = new Style();
	// this.result = "<link rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22../css/styles.css\x22/>";
}

Header.prototype.print = function(){
	this.style.print();
	// alert(this.result);
	// document.write(this.result);
}

function List(){
	this.array = new Array();
	this.numberOfElements = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
	for (var i = 0; i < this.numberOfElements; i++){
		var result = Math.random() < 0.5 ? 3 > 2 : 3 < 2;
			this.array[i] = new Heading();
	}
}

List.prototype.print = function(){
	var result = "<ul>";
	for (var i = 0; i < this.numberOfElements; i++){
		result += "<li>";
		result += this.array[i].print();
		result += "</li>";
	}
	result += "</ul>";
	document.write(this.result);
}

function Paragraph(){
	this.text = "";
	this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for( var i=0; i < 5; i++ ) {
		this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
	}
	this.list = new List();
}

Paragraph.prototype.print = function(){
	var result = "";
	result += "<p>";
	result += this.text;
	result += "</p>";
	document.write(result);
	this.list.print();
}

function Heading(){
	this.text = "";
	this.typeOfHeading = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
}

Heading.prototype.print = function(){
	var result = "";
	result += "<h";
	result += this.typeOfHeading;
	result += ">Type of heading: ";
	result += this.typeOfHeading;
	result += "</h";
	result += this.typeOfHeading;
	result += ">";
	document.write(result);
}

function Body(){
	this.array = new Array();
	this.numberOfElements = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
	for (var i = 0; i < this.numberOfElements; i++){
		var result = Math.random() < 0.5 ? 3 > 2 : 3 < 2;
		if(result){
			this.array[i] = new Paragraph();
		} else {
			this.array[i] = new Heading();
		}
	}
}

Body.prototype.print = function(){
	for (var i = 0; i < this.numberOfElements; i++){
		this.array[i].print();
	}
}

function Document(){
	this.header = new Header();
	this.body = new Body();
}

Document.prototype.printHeader = function(){
	return this.header.print();
}

Document.prototype.print = function(){
	string = this.body.print();
	return string;
}

