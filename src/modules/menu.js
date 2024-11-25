const menu = () => {
    const menu = document.querySelector('menu')
    const body = document.querySelector('body')

    const toggleMenu = () => {
       body.addEventListener('click', (e) => {
           if (e.target.closest('.menu')) {
               menu.classList.add('active-menu')
           } else if ((e.target.closest('menu')) && (e.target.matches('a'))) {
               menu.classList.remove('active-menu')
           } else if (!e.target.closest('.active-menu')) {
               menu.classList.remove('active-menu')
           }
       })
    }
    toggleMenu()
}
   
export default menu