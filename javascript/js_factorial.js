function factorial(x) {
	if (x == 0 || x == 1) {
		return 1;
	} else {
		return x * factorial(x-1);
	}
}

document.write('<ul>');
for (i = 1; i <= 20; i++) {
	document.write('<li class="verticalList">' + i + ' factorial: ' + factorial(i) + '</li>');
}

document.write('</ul>');