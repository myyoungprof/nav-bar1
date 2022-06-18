const bars = document.querySelector (".hamburger-menu")
console.log(bars)
const navMiddle = document.querySelector('.nav-middle');

console.log(navMiddle.classList)


bars.addEventListener('click', showMenu) 

function showMenu() {
   navMiddle.classList.toggle('show-menu')
   console.log(navMiddle.classList)

   bars.classList.toggle('rotate');
}


