const navbar = document.querySelector('#navbar')
const menu = document.querySelector('#menu')
const closedMenu = document.querySelector('#closed')

eventListener()
function eventListener() {
	menu.addEventListener('click', openMenu)
	closedMenu.addEventListener('click', closeMenu)
}

function openMenu() {
	navbar.classList.toggle('hidden')
}

function closeMenu() {
	navbar.classList.toggle('hidden')
}