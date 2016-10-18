var str = 'The hunter walks out in the bush alone,\n\
His wife and children are hungry at home.\n\
With arrow and bow he must try his luck,\n\
And at last he spies a still grazing  buck.\n\n\
O hunter, aim your arrow with care!\n\
Keep your eye on the target there!\n\
Pay no heed to the birds as they pass,\n\
Pay no heed to the wind in the grass,\n\
Pay no heed to the buzz of the flies,\n\
That’s how the good hunter comes home with the game.'

str = str.replace(/\t/g, '');
str = str.replace(/\n/g,'<br>');
str = str.replace(/<br><br>/g,'<p>');

var res = str.split('<p>');

document.write('<h2>Poema original</h2>');

for(i = 0; i < res.length; i++){
	document.write('<p class="hometown"><span>' + i + '</span>' + res[i] + '</p>');
}

document.write('<h2>Poema invertido</h2>');

for(i = res.length-1; i >= 0; i--){
	document.write('<p class="hometown"><span>' + i + '</span>' + res[i] + '</p>');
}
