function crearCirculo() {
	var newCircle = {
		id: 1,
		geometry:
		{
			coordinates: { x: (Math.floor((Math.random() * 20) + 1)), y: (Math.floor((Math.random() * 20) + 1)) },
			properties: { radius: (Math.floor((Math.random() * 10) + 1)) }
		}
	};
	return newCircle;
};

function crearRectangulo() {
	var newRectangle = {
		id: 2,
		geometry:
		{
			coordinates: { x: (Math.floor((Math.random() * 20) + 1)), y: (Math.floor((Math.random() * 20) + 1)) },
			properties: { width: (Math.floor((Math.random() * 10) + 1)), height: (Math.floor((Math.random() * 10) + 1)) }
		}
	};
	return newRectangle;
};

function crearTriangulo() {
	var newTriangle = {
		id: 3,
		geometry:
		{
			coordinates: { x: (Math.floor((Math.random() * 32) + 1)), y: (Math.floor((Math.random() * 17) + 1)) },
			properties: 
			{
				vertexA: { x: (Math.floor((Math.random() * 5) + 1)), y: (Math.floor((Math.random() * 5) + 1)) },
				vertexB: { x: (Math.floor((Math.random() * 5) + 1)), y: (Math.floor((Math.random() * 5) + 1)) },
				vertexC: { x: (Math.floor((Math.random() * 5) + 1)), y: (Math.floor((Math.random() * 5) + 1)) }
			}
		}
	};
	return newTriangle; 
};


var triangle =
{
	id: 3,
	geometry:
	{
		coordinates: { x: 32, y: 17 },
		properties: 
		{
			vertexA: { x: 2, y: 2 },
			vertexB: { x: 5, y: 2 },
			vertexC: { x: 3, y: 5 }
		}
	}
};

function imprimirCirculo(tempCircle, x) {
	var perimetro = 2 * Math.PI * tempCircle.geometry.properties.radius;
	var area = Math.PI * (tempCircle.geometry.properties.radius*tempCircle.geometry.properties.radius);
	document.write("<th>" + x + "</th>");
	document.write("<td>Círculo</td>");
	document.write("<td>centro(" + tempCircle.geometry.coordinates.x + "," + tempCircle.geometry.coordinates.y + ") radio(" + tempCircle.geometry.properties.radius + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

function imprimirRectangulo(tempRectangle, x) {
	var perimetro = 2 * tempRectangle.geometry.properties.width + 2 * tempRectangle.geometry.properties.height;
	var area = tempRectangle.geometry.properties.width * tempRectangle.geometry.properties.height;
	document.write("<th>" + x + "</th>");
	document.write("<td>Rectángulo</td>");
	document.write("<td>esquina superior izquierda(" + tempRectangle.geometry.coordinates.x + "," + tempRectangle.geometry.coordinates.y + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

function imprimirTriangulo(triangleX, x) {
	var perimetro = Math.sqrt(Math.pow(triangleX.geometry.properties.vertexA.x - triangleX.geometry.properties.vertexB.x,2) + Math.pow(triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexB.y,2)) + Math.sqrt(Math.pow(triangleX.geometry.properties.vertexA.x - triangleX.geometry.properties.vertexC.x,2) + Math.pow(triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexC.y,2)) + Math.sqrt(Math.pow(triangleX.geometry.properties.vertexB.x - triangleX.geometry.properties.vertexC.x,2) + Math.pow(triangleX.geometry.properties.vertexB.y - triangleX.geometry.properties.vertexC.y,2));
	var area = Math.abs( (triangleX.geometry.properties.vertexA.x * (triangleX.geometry.properties.vertexB.y - triangleX.geometry.properties.vertexC.y) + triangleX.geometry.properties.vertexB.x * (triangleX.geometry.properties.vertexC.y - triangleX.geometry.properties.vertexA.y) + triangleX.geometry.properties.vertexC.x * (triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexB.y)) / 2);
	document.write("<th>" + x + "</th>");
	document.write("<td>Triángulo</td>");
	document.write("<td>a(" + triangleX.geometry.properties.vertexA.x + "," + triangleX.geometry.properties.vertexA.y + "), b(" + triangleX.geometry.properties.vertexB.x + "," + triangleX.geometry.properties.vertexB.y + "), c(" + triangleX.geometry.properties.vertexC.x + "," + triangleX.geometry.properties.vertexC.y + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

var a = new Array();

for (var i = 0; i < 20; i++) {
	var random = Math.floor((Math.random() * 3) + 1);

	switch (random) {
		case 1:
		a.push(crearCirculo());
		break;
		case 2:
		a.push(crearRectangulo());
		break;
		case 3:
		a.push(crearTriangulo());
		break;
	}
};

document.write("<table>");
document.write("<tr><th>#</th><th>Figura</th><th>Posición/Dimensiones</th><th>Perímetro</th><th>Área</th></tr>");
for(var i = 0; i < a.length; i++) {
	document.write("<tr>");
	switch (a[i].id) {
		case 1: 
		imprimirCirculo(a[i], i);
		break;
		case 2:
		imprimirRectangulo(a[i], i);
		break;
		case 3:
		imprimirTriangulo(a[i], i);
		break;
	};
	document.write("</tr>");
}
document.write("</table>");