var game = [];
var board = [];
var move = 0; 
var verify;
var playing = true;
var dificultLevel = 1;
var cpuMove = 1;
var firstPlay = 1;
var playerName = prompt('Nome de jogador');
if (playerName == undefined || playerName == " " || playerName == true) {
	playerName = 'Jogador';}

function IAmove() {
	if (playing) {
		let lines,columns;
		if (dificultLevel == 1) {
			do{
				lines = Math.round(Math.random()*2);
				columns = Math.round(Math.random()*2);
			}
			while (game[lines][columns] != "");
			 game[lines][columns] = 'O';
		}
		else if (dificultLevel == 2){
			// level 2
		}
		updateBoard();
		verify = checkingTheVictory();
		if (verify != "") {
			if (verify == 'X') 
				document.getElementById('win').innerHTML = `${playerName} venceu`;	
			else 
				document.getElementById('win').innerHTML = 'IA venceu';
			
			playing = false;
		}
		firstPlay = 0;
	}
}


function checkingTheVictory() {
	let lines,columns;
	
	for (lines = 0; lines < 3; lines++) {
		if (game[lines][0] == game[lines][1] 
		 && game[lines][0] == game[lines][2]){
			return game[lines][0];
		}
	}

	for (columns = 0; columns < 3; columns++) {
		if (game[0][columns] == game[1][columns] 
		 && game[0][columns] == game[2][columns]){
			return game[0][columns];
		}
	}
	
	if (game[0][0] == game[1][1] 
	 && game[0][0] == game[2][2]){
			return game[0][0];
	}
	if (game[0][2] == game[1][1] 
	 && game[1][1] == game[2][0]){
			return game[0][2];
	}
	return "";
}


function play(position) {
	if (playing == true 
	 && firstPlay == 0) {
		
		switch (position) {
		
			case 1:
				if (game[0][0] == "") {
					game[0][0] = 'X';
					chekingTheFields();
				}
			break;
		
			case 2:
				if (game[0][1] == "") {
					game[0][1] = 'X';
					chekingTheFields();
				}
			break;
		
			case 3:
				if (game[0][2] == "") {
					game[0][2] = 'X';
					chekingTheFields();
				}
			break;
		
			case 4:
				if (game[1][0] == "") {
					game[1][0] = 'X';
					chekingTheFields();
				}
			break;
		
			case 5:
				if (game[1][1] == "") {
					game[1][1] = 'X';
					chekingTheFields();
				}
			break;

			case 6:
				if (game[1][2] == "") {
					game[1][2] = 'X';
					chekingTheFields();
				}
			break;
		
			case 7:
				if (game[2][0] == "") {
					game[2][0] = 'X';
					chekingTheFields();
				}
			break;
		
			case 8:
				if (game[2][1] == "") {
					game[2][1] = 'X';
					chekingTheFields();
				}
			break;
		
			case 9:
				if (game[2][2] == "") {
					game[2][2] = 'X';
					chekingTheFields();
				}
			break;
		
			default:
				alert('Esse campo não está vazio');
			break;
		}
		if (firstPlay == 1) {
			updateBoard();
			verify = checkingTheVictory();
			
			if (verify != "") {
				
				if (verify == 'X') 
					document.getElementById('win').innerHTML = `${playerName} venceu`;	
				else 
					document.getElementById('win').innerHTML = 'IA venceu';
				
				playing = false;
			}
			IAmove(); 
		}
	}
}

function updateBoard() {
	for (let lines = 0; lines < 3; lines++) {
		for (let columns = 0; columns < 3;  columns++) {
			if (game[lines][columns] == 'X') {
				board[lines][columns].innerHTML = 'X';
				board[lines][columns].style.cursor = 'default';
			}
			else if (game[lines][columns] == 'O') {
				board[lines][columns].innerHTML = 'O';
				board[lines][columns].style.cursor = 'default';
			}
			else {
				board[lines][columns].innerHTML = ' ';
				board[lines][columns].style.cursor = 'pointer';
			}
		}
	}
}

function chekingTheFields() {
	if (!game[0][0] == undefined
	 || !game[0][1] == undefined
	 ||	!game[0][2] == undefined
	 ||	!game[1][0] == undefined
	 ||	!game[1][1] == undefined
	 ||	!game[1][2] == undefined
	 ||	!game[2][0] == undefined
     ||	!game[2][1] == undefined
	 ||	!game[2][2] == undefined) {
		document.getElementById('win').innerHTML = 'Empate !';		
	}
	else firstPlay = 1;
}

function start() {
	
	playing = true;
	jogadaCpu = 1;
	game=[
		  ['','',''],
		  ['','',''],
		  ['','','']
	];
	board=[
		[document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3')],
		[document.getElementById('p4'),document.getElementById('p5'),document.getElementById('p6')], 
		[document.getElementById('p7'),document.getElementById('p8'),document.getElementById('p9')]
	];
	updateBoard();
	
	if (firstPlay == 1) {
		firstPlay = 0;
		move = 0;

	}
	else {
		firstPlay = 1;
		move = firstPlay;
		IAmove();
	}	
}

window.addEventListener('load',start);