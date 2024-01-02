document.addEventListener('DOMContentLoaded', function () {
	const menu = document.querySelector('#menu')
	const navbar = document.querySelector('#navbar')

	menu.addEventListener('click', () => {
		navbar.classList.toggle('hidden')
	})
})

