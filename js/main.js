var game = [];
var board = [];
var quemJoga = 0; 
var verify;
var playing = true;
var dificultLevel = 1;
var cpuMove = 1;
var firstPlay = 1;
var playerName = prompt('Nome de jogador');

function cpuJoga() {
	if (playing) {
		var l,c;
		if (dificultLevel == 1) {
			do{
				l = Math.round(Math.random()*2);
				c = Math.round(Math.random()*2);
			}while (game[l][c] != "");
			 game[l][c]='O';
		}
		else if (dificultLevel == 2){
			// level 2
		}
		atualizaTabuleiro();
		verify = verificaVitoria();
		if (verify != "") {
			if (verify == 'X') {
				document.getElementById('quemVence').innerHTML = 'Jogador venceu';	
			}else {
				document.getElementById('quemVence').innerHTML = 'CPU venceu';
			}
			playing = false;
		}
		firstPlay=0;
	}
}


function verificaVitoria() {
	var l,c;
	// VERIFICANDO AS LINHAS
	for (l = 0; l < 3; l++) {
		if (game[l][0] == game[l][1] 
		 && game[l][0] == game[l][2]){
			return game[l][0];
		}
	}
	// VERIFICANDO AS COLUNAS
	for (c = 0; c < 3; c++) {
		if (game[0][c]==game[1][c] 
		 && game[0][c]==game[2][c]){
			return game[0][c];
		}
	}
	// VERIFICANDO AS DIAGONAIS
	if (game[0][0]==game[1][1] 
	 && game[0][0]==game[2][2]){
			return game[0][0];
	}
	if (game[0][2]==game[1][1] 
	 && game[1][1]==game[2][0]){
			return game[0][2];
	}
	return "";
}


function jogar(p) {
	if (playing == true && firstPlay == 0) {
		switch (p) {

		// Posição 1
			case 1:
				if (game[0][0]=="") {
					game[0][0]='X';
					firstPlay = 1;
				}
			break;
		// Posição 2
			case 2:
				if (game[0][1]=="") {
					game[0][1]='X';
					firstPlay = 1;
				}
			break;
		// Posição 3
			case 3:
				if (game[0][2]=="") {
					game[0][2]='X';
					firstPlay = 1;
				}
			break;
		// Posição 4
			case 4:
				if (game[1][0]=="") {
					game[1][0]='X';
					firstPlay = 1;
				}
			break;
		// Posição 5
			case 5:
				if (game[1][1]=="") {
					game[1][1]='X';
					firstPlay = 1;
				}
			break;
		// Posição 6
			case 6:
				if (game[1][2]=="") {
					game[1][2]='X';
					firstPlay = 1;
				}
			break;
		// Posição 7
			case 7:
				if (game[2][0]=="") {
					game[2][0]='X';
					firstPlay = 1;
				}
			break;
		// Posição 8
			case 8:
				if (game[2][1]=="") {
					game[2][1]='X';
					firstPlay = 1;
				}
			break;
		// Posição 9
			case 9:
				if (game[2][2]=="") {
					game[2][2]='X';
					firstPlay = 1;
				}
			break;
		// Caso de erro no desenvolvimento
			default:
				console.log('Erro descoberto');
			break;
		}
		if (firstPlay == 1) {
			atualizaTabuleiro();
			verify = verificaVitoria();
			if (verify != "") {
				if (verify == 'X') {
					document.getElementById('quemVence').innerHTML = 'Jogador venceu';	
				}else {
					document.getElementById('quemVence').innerHTML = 'CPU venceu';
				}
				playing = false;
			}
			cpuJoga(); // --- CONTINUAR DAQUI	
		}
	}
}

function atualizaTabuleiro() {
	for (var l = 0; l < 3; l++) {
		for (var c = 0; c < 3;  c++) {
			if (game[l][c]=='X') {
				board[l][c].innerHTML = 'X';
				board[l][c].style.cursor = 'default';
			}
			else if (game[l][c]=='O') {
				board[l][c].innerHTML = 'O';
				board[l][c].style.cursor = 'default';
			}
			else {
				board[l][c].innerHTML = ' ';
				board[l][c].style.cursor = 'pointer';
			}
		}
	}
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
	atualizaTabuleiro();
	
	if (firstPlay == 1) {
		firstPlay = 0;
		quemJoga = 0;

	}
	else {
		firstPlay = 1;
		quemJoga = firstPlay;
		cpuJoga();
	}	
}


window.addEventListener('load',start);