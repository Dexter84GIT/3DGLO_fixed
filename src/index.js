import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import slider from './modules/slider'
import tabs from './modules/tabs'
import calc from './modules/calc'
import validate from './modules/validation'
import sendForm from './modules/sendForm'

timer('2 december 2024')
menu()
modal()
slider()
tabs()
calc()
validate()
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
