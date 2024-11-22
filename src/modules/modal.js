const modal = () => { 
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    let windowWidth
    let animation

    window.addEventListener('resize', () => {
        windowWidth = document.documentElement.clientWidth
    })

    const fadeIn = (element, timeout) => {
        animation = requestAnimationFrame(fadeIn)
        element.style.opacity = 0;
        element.style.display = 'block';
//        element.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            element.style.opacity = 1;
        }, timeout);
    }

    const fadeOut = (element, timeout) => {
        element.style.opacity = 1;
//        element.style.transition = `opacity ${timeout}ms`;
        element.style.opacity = 0; 
        setTimeout(() => {
            element.style.display = 'none';
        }, timeout);
        cancelAnimationFrame(fadeIn)
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (windowWidth > 768) {
                fadeIn(modal, 1000);
            } else {
                modal.style.display = 'block';
                modal.style.opacity = 1;
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        if (windowWidth > 768) {
            fadeOut(modal, 1000)
        } else {
            modal.style.display = 'none';
            modal.style.opacity = 0;
        }
    })
}
modal()
//export default modal