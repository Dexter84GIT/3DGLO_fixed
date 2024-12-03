const validate = () => {
    const form = document.querySelectorAll('form')
    const emailInput = document.querySelectorAll('input[type="email"]')
    const calcItem = document.querySelectorAll('.calc-block input[type="text"]')
    const phoneInput = document.querySelectorAll('input[name="user_phone"]')
    const nameInput = document.querySelectorAll('input[name="user_name"]')
    const messageInput = document.querySelector('input[name="user_message"]')

    calcItem.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value
            const regExp = /[^0-9]/gi
            if (regExp.test(value)) {
                value = value.replace(regExp, '')
                e.target.value = value
            }
        })
    })

    form.forEach(form => {
        form.addEventListener('input', (e) => {
            e.preventDefault()
            const regExp = /[^а-яА-Я\s]+$/gi
            const testEmail = /[^a-zA-Z0-9\@\-\_\.\!\~\*\']/gi
            const testPhone = /[^0-9\(\)\-\+]/gi
            const textMessage = /[^а-яА-Я0-9\,\.\!\?\-\:\d\s]+$/gi

            nameInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    let value = e.target.value
                    if (regExp.test(value) && value !== '') {
                        value = value.replace(regExp, '')
                        e.target.value = value
                    } 
                })
            }) 
            messageInput.addEventListener('input', (e) => {
                let value = e.target.value
                if (textMessage.test(value) && value !== '') {
                    value = value.replace(textMessage, '')
                    e.target.value = value
                }
            })
            emailInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    let value = e.target.value
                    if (testEmail.test(value) && value !== '') {
                        value = value.replace(testEmail, '')
                        e.target.value = value
                    }
                })
            })
            phoneInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    let value = e.target.value
                    if (testPhone.test(value) && value !== '') {
                        value = value.replace(testPhone, '')
                        e.target.value = value
                    }
                })
            })
        })
    })
}

export default validate