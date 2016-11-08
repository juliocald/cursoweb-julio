function fibonacci(x){
	var i;
	var fib = [];
	var finalString = "";
	fib[0] = 0;
	fib[1] = 1;
	finalString += "[ " + fib[0] + ", " + fib[1] + ", ";
	for (i=2; i<x; i++)
	{
	    fib[i] = fib[i-2] + fib[i-1];
	    finalString += fib[i] + ", ";
	}
	fib[x] = fib[x-2] + fib[x-1];
	finalString += fib[i] + "]";
	alert(finalString);
}
