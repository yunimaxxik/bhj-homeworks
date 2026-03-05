const holeElements = document.querySelectorAll('.hole');
const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');
let countOfDeads = 0;
let countOfLosts = 0;

function finishGame(result) {
	if (result) {
		alert('Победа');
	} else {
		alert('Поражение');
	}
	countOfDeads = 0;
	countOfLosts = 0;
	deadElement.textContent = 0;
	lostElement.textContent = 0;
}

holeElements.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('hole_has-mole')) {
			countOfDeads++;
			deadElement.textContent = countOfDeads;
			if (countOfDeads === 10) {
				finishGame(true);
			}
		} else {
			countOfLosts++;
			lostElement.textContent = countOfLosts;
			if (countOfLosts === 5) {
				finishGame(false);
			}
		}
	});
});
