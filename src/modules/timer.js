const timer = (deadline) => {   
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
        const timeRemaining = (dateStop - dateNow) / 1000
        const hours = Math.floor(timeRemaining / 60 /60) 
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }
    const updateClock = () => {
        const getTime = getTimeRemaining()

        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        if (timerHours.textContent.length < 2) {
            timerHours.textContent = `0${getTime.hours}`
        } else if (timerMinutes.textContent.length < 2) {
            timerMinutes.textContent = `0${getTime.minutes}`
        } else if (timerSeconds.textContent.length < 2) {
            timerSeconds.textContent = `0${getTime.seconds}`
        }
        if (getTime.timeRemaining <= 0) {
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(updateClock)
        } else {
            setInterval(updateClock, 1000)   
        }
    }
    setTimeout(updateClock, 0)
}


export default timer
