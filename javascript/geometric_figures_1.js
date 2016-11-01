var circle = 
{
	geometry:
	{
		coordinates: { x: 10, y: 5 },
		properties: { radius: 10 }
	}
};

var rectangle =
{
	geometry:
	{
		coordinates: { x: 30, y: 45 },
		properties: { width: 23, height: 12 }
	}
};

var triangle =
{
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

function imprimirCirculo(x) {
	var perimetro = 2 * Math.PI * circle.geometry.properties.radius;
	var area = Math.PI * (circle.geometry.properties.radius*circle.geometry.properties.radius);
	document.write("<th>" + x + "</th>");
	document.write("<td>Círculo</td>");
	document.write("<td>centro(" + circle.geometry.coordinates.x + "," + circle.geometry.coordinates.y + ") radio(" + circle.geometry.properties.radius + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

function imprimirRectangulo(x) {
	var perimetro = 2 * rectangle.geometry.properties.width + 2 * rectangle.geometry.properties.height;
	var area = rectangle.geometry.properties.width * rectangle.geometry.properties.height;
	document.write("<th>" + x + "</th>");
	document.write("<td>Rectángulo</td>");
	document.write("<td>esquina superior izquierda(" + rectangle.geometry.coordinates.x + "," + rectangle.geometry.coordinates.y + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

function imprimirTriangulo(x) {
	var perimetro = Math.sqrt(Math.pow(triangle.geometry.properties.vertexA.x - triangle.geometry.properties.vertexB.x,2) + Math.pow(triangle.geometry.properties.vertexA.y - triangle.geometry.properties.vertexB.y,2)) + Math.sqrt(Math.pow(triangle.geometry.properties.vertexA.x - triangle.geometry.properties.vertexC.x,2) + Math.pow(triangle.geometry.properties.vertexA.y - triangle.geometry.properties.vertexC.y,2)) + Math.sqrt(Math.pow(triangle.geometry.properties.vertexB.x - triangle.geometry.properties.vertexC.x,2) + Math.pow(triangle.geometry.properties.vertexB.y - triangle.geometry.properties.vertexC.y,2));
	var area = Math.abs( (triangle.geometry.properties.vertexA.x * (triangle.geometry.properties.vertexB.y - triangle.geometry.properties.vertexC.y) + triangle.geometry.properties.vertexB.x * (triangle.geometry.properties.vertexC.y - triangle.geometry.properties.vertexA.y) + triangle.geometry.properties.vertexC.x * (triangle.geometry.properties.vertexA.y - triangle.geometry.properties.vertexB.y)) / 2);
	document.write("<th>" + x + "</th>");
	document.write("<td>Rectángulo</td>");
	document.write("<td>a(" + triangle.geometry.properties.vertexA.x + "," + triangle.geometry.properties.vertexA.y + "), b(" + triangle.geometry.properties.vertexB.x + "," + triangle.geometry.properties.vertexB.y + "), c(" + triangle.geometry.properties.vertexC.x + "," + triangle.geometry.properties.vertexC.y + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

document.write("<table>");
for(var i = 0; i < 4; i++) {
	document.write("<tr>");
	if (i == 0) {
		document.write("<th>#</th><th>Figura</th><th>Posición/Dimensiones</th><th>Perímetro</th><th>Área</th>");
	} 
	else {
		switch (i) {
			case 1:
			imprimirCirculo(i);
			break;
			case 2:
			imprimirRectangulo(i);
			break;
			case 3:
			imprimirTriangulo(i);
			break;
		}
	}
	document.write("</tr>");
}
document.write("</table>");