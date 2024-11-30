const validate = () => {
    const form = document.querySelectorAll('form')
    const textInput = document.querySelectorAll('input[type="text"]')
    const textarea = document.querySelector('.mess')
    const emailInput = document.querySelectorAll('input[type="email"]')
    const phoneInput = document.querySelectorAll('input[type="tel"]')
    const calcItem = document.querySelectorAll('.calc-block input[type="text"]')
    
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
            let value = e.target.value
            const regExp = /[a-zA-Z]/gi
            const testEmail = /[^a-zA-Z0-9\@\-\_\.\!\~\*\']/gi
            const testPhone = /[^0-9\(\)\-]/gi

            textInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    if (regExp.test(value) && value !== '') {
                        value = value.replace(regExp, '')
                        e.target.value = value
                    }
                })
            }) 
            textarea.addEventListener('input', (e) => {
                if (regExp.test(value) && value !== '') {
                    value = value.replace(regExp, '')
                    e.target.value = value
                }
            })
            emailInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    if (testEmail.test(value)) {
                        value = value.replace(testEmail, '')
                        e.target.value = value
                    }
                })
            })
            phoneInput.forEach(input => {
                input.addEventListener('input', (e) => {
                    if (testPhone.test(value)) {
                        value = value.replace(testPhone, '')
                        e.target.value = value
                    }
                })
            })
        })
    })
}

export default validate