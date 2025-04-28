function calculate()
{
	event.preventDefault();
	let num=document.getElementById("num");
	let msg=document.getElementById("msg");
	
	let n=parseFloat(num.value);
	r=n*n;
	msg.innerHTML="The square is : " + r.toFixed(2);
}