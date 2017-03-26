//function declaration
function calculatearea(r1)
{
	var a1=Math.round(3.142*r1*r1);
	
	return a1;
}
var r=7;
var a=calculatearea(r);   //function calling 
// to display output in console
console.log("The area of the circle of radius ",r,"is",a);

