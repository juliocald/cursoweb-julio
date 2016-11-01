var t0 = performance.now();
var test = 0;

for (var i = 0; i < 1000; i++) {
	for (var j = 0; j < 1000; j++) {
		for (var k = 0; k < 1000; k++) {
			test++;
		}
	}
}

var t1 = performance.now();
var total = t1 - t0;
var x = 0;
if (total > 999) {
	total = total / 1000;
	x = 1;
}

document.write("<h2>Tiempo total: " + total + ((x) ? " segundos." : " milisegundos.") + "</h2>");