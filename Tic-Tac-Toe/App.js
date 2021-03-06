const boxes = Array.from(document.querySelectorAll('.box'));
const playText = document.getElementById('playText');
const restartButton = document.getElementById('restartButton');
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;

const drawBoard = () => {
	boxes.forEach((box, index) => {
		let styleString = '';
		if(index<3) {			//boxes on top
			styleString += 'border-bottom: 3px solid var(--purple);'
		}
		if(index %3 == 0) {		//boxes on left
			styleString += 'border-right: 3px solid var(--purple);'
		}
		if(index %3 == 2) {		//boxes on right
			styleString += 'border-left: 3px solid var(--purple);'
		}
		if(index>5) {			//boxes on top
			styleString += 'border-top: 3px solid var(--purple);'
		}
		box.style = styleString
		box.addEventListener('click', boxClicked)
	})
}

boxClicked = (e) => {
	const id = e.target.id
	if(!spaces[id]) {
		spaces[id] = currentPlayer
		e.target.innerText = currentPlayer

		if(playerHasWon()) {
			playText.innerText = currentPlayer + ' has won!'
			return
		}
		currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT
	}
}

const playerHasWon = () => {
	if(spaces[0] == currentPlayer) {
		if(spaces[1] == currentPlayer && spaces[2] == currentPlayer){
			return true
		}
		if(spaces[3] == currentPlayer && spaces[6] == currentPlayer){
			return true
		}
		if(spaces[4] == currentPlayer && spaces[8] == currentPlayer){
			return true
		}
	} 
	if(spaces[8] == currentPlayer) {
		if(spaces[2] == currentPlayer && spaces[5] == currentPlayer){
			return true
		}
		if(spaces[6] == currentPlayer && spaces[7] == currentPlayer){
			return true
		}
	}
	if(spaces[4] == currentPlayer) {
		if(spaces[1] == currentPlayer && spaces[7] == currentPlayer){
			return true
		}
		if(spaces[3] == currentPlayer && spaces[5] == currentPlayer){
			return true
		}
		if(spaces[2] == currentPlayer && spaces[6] == currentPlayer){
			return true
		}
	}
}

const restart = () => {
	spaces.forEach((space, index) => {
		spaces[index] = null;
	})
	boxes.forEach(box => {
		box.innerText = ''
	})
	playText.innerText = "Let's Play!"
	currentPlayer = O_TEXT
}

restartButton.addEventListener('click', restart)
restart()
drawBoard()