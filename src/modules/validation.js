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

// import { log } from "neo-async"


 //   })



//    console.log(textInput);
//    console.log(textarea);
//    console.log(form);
//    
//}
//
//export default validation

//const validation = () => {
//const textInputs = document.querySelectorAll('input[type="text"]')
//const emailInputs = document.querySelectorAll('input[type="email"]')
//const forms = document.querySelectorAll('form')
//let isError = false
//
//    forms.forEach(form => {
//        textInputs.forEach(textInput => {
//            textInput.addEventListener('input', () => {
//                textInput.value = textInput.value.match(/[а-яА-Я\s\-]+/gi) 
//            })
//        })
//        form.addEventListener('submit', (e) => {
//            e.preventDefault()
//            textInputs.forEach(textInput => {
//                textInput.addEventListener('input', () => {
//                    textInput.value = textInput.value.match(/[а-яА-Я\s\-]+/gi) 
//                    if (!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== '') {
//                        console.log('Нам нужна кириллица!');
//                    } else {
//                        isError = true
//                    }
//                })
//            })
//
//        })
//    }) 
//
//    emailInputs.forEach(input => {
//            const testEmail = /([\-\.\w]+)(@)([\w]+\.)+([\w]+)/gi
//            const validEmail = (value) => {
//                return testEmail.match(value)
//            }
//
//            input.addEventListener('input', validEmail);
//        })
//    }
//
//
//
//validation()