//GREEDY
function getCharge(){
	do{
	var charge = prompt("Type amount of your charge:", "");
	} while(charge < 0 || isNaN(charge));

	var counter = 0;
	var cents = charge * 1000 / 10;

	counter = (counter + cents / 25) ^ 0;
	cents = cents % 25;

	counter = (counter + cents / 10) ^ 0;
	cents = cents % 10;

	counter = (counter + cents / 5) ^ 0;
	cents = cents % 5;

	counter = (counter + cents / 1) ^ 0;
	cents = cents % 1;

	alert(counter);
}
getCharge();