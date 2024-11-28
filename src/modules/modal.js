import { animate } from './helpers'

const modal = () => { 
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    let windowWidth = document.documentElement.clientWidth


    window.addEventListener('resize', () => {
        windowWidth = document.documentElement.clientWidth
    })

    const fadeIn = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress
                modal.style.display = 'block';
            }
          });
    }

    const fadeOut = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                modal.style.display = 'none';
            }
          });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (windowWidth > 768) {
                fadeIn();
            } else {
                modal.style.display = 'block';
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        if (windowWidth > 768) {
            fadeOut()
        } else {
            modal.style.display = 'none';
        }
    })
}

export default modal