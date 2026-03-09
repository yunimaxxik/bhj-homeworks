const tabs = document.querySelectorAll('.tabs');

tabs.forEach((tab) => {
	const tabElements = tab.querySelectorAll('.tab');
	const tabContentElements = tab.querySelectorAll('.tab__content');

	tabElements.forEach((item, index) => {
		item.addEventListener('click', () => {
			for (let i = 0; i < tabElements.length; i++) {
				if (i !== index) {
					tabElements[i].classList.remove('tab_active');
					tabContentElements[i].classList.remove('tab__content_active');
				}
			}
			item.classList.add('tab_active');
			tabContentElements[index].classList.add('tab__content_active');
		});
	});
});
