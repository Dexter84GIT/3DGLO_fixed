const greeting = document.querySelector('.greeting')
const timer = document.querySelector('.time')
const day = document.querySelector('.day')
const newYear = document.querySelector('.new-year')
const midnight = document.querySelector('.midnight')
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const dateCounter = () => {
    const time = new Date()
    const todayTime = new Date().getTime()
    const newYearCount = new Date('2025', '0', '1').getTime()
    const timeDay = time.getDay()
    const timeHour = time.getHours()
    const deadline = ((newYearCount - todayTime) / 1000)
    const timeMinutes = Math.floor((deadline / 3600) / 24)

    return {
        time, timeDay, timeHour, timeMinutes
    }
}

const dateText = () => {
    const date = dateCounter()
    day.textContent = `Сегодня: ${weekDays[date.timeDay]}`
    timer.textContent = `Текущее время: ${date.time.toTimeString().substr(0, 8)} ` 
    if (dateCounter.timeHour < 24 && dateCounter.timeHour > 12) {
        midnight.textContent = `PM`
    } else {
        midnight.textContent = `AM`
    }
    newYear.textContent = `До Нового Года осталось ${date.timeMinutes} дней`
    if (date.timeHour < 24 && date.timeHour > 18) {
        greeting.textContent = `Добрый вечер`
    } else if (date.timeHour < 18 && date.timeHour > 12) {
        greeting.textContent = `Добрый день`
    } else if (date.timeHour < 12 && date.timeHour > 6) {
        greeting.textContent = `Доброе утро`
    } else if (date.timeHour < 6 && date.timeHour > 0) {
        greeting.textContent = `Доброй ночи`
    }
    setInterval(dateText, 1000)
}
setTimeout(dateText, 0)



