const obserwator = new IntersectionObserver((wejscia) => {
	wejscia.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const ukryte = document.querySelectorAll(".fashion", "aside");
ukryte.forEach((el) => obserwator.observe(el));
