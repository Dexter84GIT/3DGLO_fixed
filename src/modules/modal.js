import { animate } from './helpers'

const modal = () => { 
    const modal = document.querySelector('.popup')
    const popup = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    let windowWidth = document.documentElement.clientWidth
    let animation

    window.addEventListener('resize', () => {
        windowWidth = document.documentElement.clientWidth
    })

    const fadeIn = () => {
        animate({
            duration: 2000,
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
            duration: 2000,
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
                console.log('not');
                
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        if (windowWidth > 768) {
            fadeOut()
        } else {
            console.log('not');
        }
    })
}

export default modal