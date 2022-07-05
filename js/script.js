document.addEventListener('DOMContentLoaded', () => {
	const animateItems = document.querySelectorAll('._animated')
	const animateObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(ent => {
			if (ent.isIntersecting) {
				console.log(ent)
				ent.target.classList.add('_active')
			}
		})
	}, {

		threshold: 0.1

	})


	animateItems.forEach(el => {
		animateObserver.observe(el)
	})

})