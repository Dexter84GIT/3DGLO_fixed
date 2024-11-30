//const validation = () => {
//    const textInput = document.querySelectorAll('input[type="text"]')
//    const textarea = document.querySelector('.mess')
//    const form = document.querySelectorAll('form')
//
//form.forEach(form => {
//    form.addEventListener('submit', (e) => {
//        e.preventDefault()
//
//        textInput.forEach(input => {
//            input.addEventListener('input', (e) => {
//                if (e.value != (/[^а-яА-Я]/g.test(e.value))) {
//                    console.log('Херня какая-то');
//                } else {
//                    console.log('Да всё ок вроде');
//                }
//            })
//        }) 
//    })
//})
//    form.addEventListener('submit', (e) => {
//       e.preventDefault()
//        let isError = false
//    
//        if (!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== '') {
//            alert('Только кириллица')
//        } else {
//            isError = true
//        }
//    
//        if (!/[^\d]/g.test(numberInput.value) && numberInput.value !== '') {
//            alert('Только цифры')
//        } else {
//            isError = true
//        }
//    
//        if (!isError) {
//            alert('Send')
//        }


 //   })



//    console.log(textInput);
//    console.log(textarea);
//    console.log(form);
//    
//}
//
//export default validation

const validate = () => {
    const form = document.querySelectorAll('form')
    const textInput = document.querySelectorAll('input[type="text"]')
    const textarea = document.querySelector('.mess')
    const emailInput = document.querySelectorAll('input[type="email"]')
    const phoneInput = document.querySelectorAll('input[type="tel"]')

    
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