const imageClicker = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let totalClicks = 0;
let totalTime = 0;
let firstClickTime = 0;

imageClicker.addEventListener('click', () => {
	const currentTime = Date.now();

	totalClicks++;
	clickerCounter.textContent = totalClicks;

	if (totalClicks === 1) {
		firstClickTime = currentTime;
	} else {
		totalTime = currentTime - firstClickTime;
		clickerSpeed.textContent = (totalClicks / (totalTime / 1000)).toFixed(2);
	}

	imageClicker.style.width = '190px';
	setTimeout(() => {
		imageClicker.style.width = '200px';
	}, 100);
});
