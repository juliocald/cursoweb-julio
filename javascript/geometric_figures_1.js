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

function imprimirTriangulo(triangleX, x) {
	var perimetro = Math.sqrt(Math.pow(triangleX.geometry.properties.vertexA.x - triangleX.geometry.properties.vertexB.x,2) + Math.pow(triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexB.y,2)) + Math.sqrt(Math.pow(triangleX.geometry.properties.vertexA.x - triangleX.geometry.properties.vertexC.x,2) + Math.pow(triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexC.y,2)) + Math.sqrt(Math.pow(triangleX.geometry.properties.vertexB.x - triangleX.geometry.properties.vertexC.x,2) + Math.pow(triangleX.geometry.properties.vertexB.y - triangleX.geometry.properties.vertexC.y,2));
	var area = Math.abs( (triangleX.geometry.properties.vertexA.x * (triangleX.geometry.properties.vertexB.y - triangleX.geometry.properties.vertexC.y) + triangleX.geometry.properties.vertexB.x * (triangleX.geometry.properties.vertexC.y - triangleX.geometry.properties.vertexA.y) + triangleX.geometry.properties.vertexC.x * (triangleX.geometry.properties.vertexA.y - triangleX.geometry.properties.vertexB.y)) / 2);
	document.write("<th>" + x + "</th>");
	document.write("<td>Triángulo</td>");
	document.write("<td>a(" + triangleX.geometry.properties.vertexA.x + "," + triangleX.geometry.properties.vertexA.y + "), b(" + triangleX.geometry.properties.vertexB.x + "," + triangleX.geometry.properties.vertexB.y + "), c(" + triangleX.geometry.properties.vertexC.x + "," + triangleX.geometry.properties.vertexC.y + ")</td>");
	document.write("<td>" + perimetro + "</td>");
	document.write("<td>" + area + "</td>");
}

document.write("<table>");
for(var i = 0; i <= 4; i++) {
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
			imprimirTriangulo(triangle, i);
			break;
			case 4:
			var triangleY =
			{
				geometry:
				{
					coordinates: { x: 32, y: 17 },
					properties: 
					{
						vertexA: { x: 5, y: 2 },
						vertexB: { x: 10, y: 7 },
						vertexC: { x: 15, y: 5 }
					}
				}
			};
			imprimirTriangulo(triangleY, i+1);
			break;
		}
	}
	document.write("</tr>");
}
document.write("</table>");