const bookElement = document.querySelector('.book');
const bookControlsFontSize = document.querySelector('.book__control_font-size');
const bookControlsColor = document.querySelector('.book__control_color');
const bookControlsBackground = document.querySelector(
	'.book__control_background',
);

function setupControl(
	container,
	itemClass,
	activeClass,
	classPrefix,
	datasetKey,
	possibleValues,
) {
	container.addEventListener('click', (event) => {
		event.preventDefault();

		const target = event.target;
		const item = target.closest(`.${itemClass}`);
		if (!item) return;

		container
			.querySelectorAll(`.${itemClass}`)
			.forEach((el) => el.classList.remove(activeClass));
		item.classList.add(activeClass);

		const value = item.dataset[datasetKey];

		possibleValues.forEach((val) =>
			bookElement.classList.remove(`${classPrefix}${val}`),
		);

		if (value) {
			bookElement.classList.add(`${classPrefix}${value}`);
		}
	});
}
setupControl(
	bookControlsFontSize,
	'font-size',
	'font-size_active',
	'book_fs-',
	'size',
	['small', 'big'],
);

setupControl(
	bookControlsColor,
	'color',
	'color_active',
	'book_color-',
	'textColor',
	['gray', 'whitesmoke', 'black'],
);

setupControl(
	bookControlsBackground,
	'color',
	'color_active',
	'book_bg-',
	'bgColor',
	['gray', 'black', 'white'],
);
