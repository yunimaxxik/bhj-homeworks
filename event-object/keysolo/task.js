class Game {
	constructor(container) {
		this.container = container;
		this.wordElement = container.querySelector('.word');
		this.winsElement = container.querySelector('.status__wins');
		this.lossElement = container.querySelector('.status__loss');
		this.timer = container.querySelector('.status__timer');
		this.intervalId = null;
		this.reset();
		this.registerEvents();
	}

	setTimer() {
		clearInterval(this.intervalId);
		let seconds = this.wordElement.childElementCount;
		this.timer.textContent = seconds;
		this.intervalId = setInterval(() => {
			seconds--;
			this.timer.textContent = seconds;
			if (seconds === 0) {
				clearInterval(this.intervalId);
				this.fail();
			}
		}, 1000);
	}

	reset() {
		this.setNewWord();
		this.winsElement.textContent = 0;
		this.lossElement.textContent = 0;
	}

	registerEvents() {
		document.addEventListener('keydown', (event) => {
			if (event.key.length > 1) return;
			if (!this.currentSymbol) return;
			event.preventDefault();
			console.log(this);
			const expectedChar = this.currentSymbol.textContent.toLowerCase();
			const actualChar = event.key.toLowerCase();
			if (actualChar === expectedChar) {
				this.success();
			} else {
				this.fail();
			}
		});
	}

	success() {
		if (this.currentSymbol.classList.contains('symbol_current'))
			this.currentSymbol.classList.remove('symbol_current');
		this.currentSymbol.classList.add('symbol_correct');
		this.currentSymbol = this.currentSymbol.nextElementSibling;

		if (this.currentSymbol !== null) {
			this.currentSymbol.classList.add('symbol_current');
			return;
		}

		if (++this.winsElement.textContent === 10) {
			alert('Победа!');
			this.reset();
		}
		this.setNewWord();
	}

	fail() {
		if (++this.lossElement.textContent === 5) {
			alert('Вы проиграли!');
			this.reset();
		}
		this.setNewWord();
	}

	setNewWord() {
		const word = this.getWord();

		this.renderWord(word);
	}

	getWord() {
		const words = [
				'bob',
				'awesome',
				'netology',
				'hello',
				'kitty',
				'rock',
				'youtube',
				'popcorn',
				'cinema',
				'love',
				'javascript',
			],
			index = Math.floor(Math.random() * words.length);

		return words[index];
	}

	renderWord(word) {
		const html = [...word]
			.map(
				(s, i) =>
					`<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`,
			)
			.join('');
		this.wordElement.innerHTML = html;

		this.currentSymbol = this.wordElement.querySelector('.symbol_current');
		this.setTimer();
	}
}

new Game(document.getElementById('game'));
