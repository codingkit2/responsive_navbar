const toggle = document.getElementsByClassName('toggle')[0]
const navbarItems = document.getElementsByClassName('nav-items')[0]

toggle.addEventListener('click', () => {
  navbarItems.classList.toggle('active')
})