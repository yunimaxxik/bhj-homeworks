const bookControls = document.querySelector('.book__control');
const bookElement = document.querySelector('.book');

bookControls.addEventListener('click', (event) => {
	event.preventDefault();

	const target = event.target;
	if (!target.classList.contains('font-size')) return;

	bookElement.querySelectorAll('.font-size').forEach((el) => {
		el.classList.remove('font-size_active');
	});

	target.classList.add('font-size_active');
	const size = target.dataset.size;

	bookElement.classList.remove('book_fs-small', 'book_fs-big');
	if (size) {
		bookElement.classList.add(`book_fs-${size}`);
	}
});
