const rotator = document.querySelector('.rotator');

const cases = Array.from(rotator.children);
let activeIndex = cases.findIndex((item) =>
	item.classList.contains('rotator__case_active'),
);

setInterval(() => {
	cases[activeIndex].classList.remove('rotator__case_active');
	activeIndex = (activeIndex + 1) % cases.length;
	const nextElement = cases[activeIndex];
	nextElement.classList.add('rotator__case_active');
}, 1000);
