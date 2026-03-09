const dropDownBtns = document.querySelectorAll('.dropdown');

dropDownBtns.forEach((dropDownBtn) => {
	const dropDownList = dropDownBtn.querySelector('.dropdown__list');
	const dropDownValue = dropDownBtn.querySelector('.dropdown__value');

	dropDownBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		dropDownList.classList.toggle('dropdown__list_active');
	});

	dropDownList.addEventListener('click', (event) => {
		const item = event.target.closest('.dropdown__item');
		if (!item) return;

		event.preventDefault();
		event.stopPropagation();

		dropDownValue.textContent = item.textContent;
		dropDownList.classList.remove('dropdown__list_active');
	});
});
