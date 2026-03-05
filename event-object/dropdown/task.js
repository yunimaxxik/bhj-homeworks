const dropDownBtn = document.querySelector('.dropdown');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItems = document.querySelectorAll('.dropdown__item');
const dropDownValue = document.querySelector('.dropdown__value');

dropDownBtn.addEventListener('click', () => {
	dropDownList.classList.add('dropdown__list_active');
});

dropDownList.addEventListener('click', (event) => {
	const item = event.target.closest('.dropdown__item');
	if (!item) return;

	event.preventDefault();
	event.stopPropagation();

	dropDownValue.textContent = item.textContent;
	dropDownList.classList.remove('dropdown__list_active');
});
