//MARIO
function buildTower(){
	var height = prompt("Type the height:", "");
	while(height < 0 || height > 23 || isNaN(height) || (height - (height ^ 0) !== 0)){
		height = prompt("Try again", "");
	}
	for(var row = 1; row <= height; row++){
		var divElement = document.getElementById("content");
		var strSpace = '';
		var strHash = '';
		var strHash2 = '';
		//first tower, third tower
		for(var space = 1; space <= height - row; space++){
			strSpace += " ";
		}
		for(var hash = 0; hash <= row; hash++){
			strHash += "#";
		}
		//second tower
		for(var hash2 = 1; hash2 <= 2 * row - 1; hash2++){
			strHash2 += "#";
		}
		var str = strSpace + strHash + strSpace + strHash2 + strSpace + strHash;
		divElement.innerHTML += str + "\n";
	}
}
buildTower();