import { button } from "./utility";
import { Body } from "./body";
import {NAME} from './home-tab'

const NAMES = ['Home' ,'Menu' , 'Contact']
const HOVERCOLOR = 'rgba(255 , 255,255,0.1)'


const Display = (function(){
    let container = document.getElementById('content')
    let content = Body.setup()
    let shown_tab = 'home'


    const tab_swtich = (element) => {
        let id = element.dataset.name.toLowerCase()



        let past = document.getElementById(`${shown_tab}-container`)
        past.style.visibility = 'hidden'
        let pastbtn = document.getElementById(`${shown_tab}`)
        pastbtn.style.backgroundColor = 'transparent'


        let current = document.getElementById(`${id}-container`)
        current.style.visibility = 'visible'
        element.style.backgroundColor = HOVERCOLOR
        
        
        shown_tab = id

    }

    const tab_header = () => {
        let div = document.createElement('div')
        div.classList.add('tab-header')
    
        let btns = []
        let logo = document.createElement('h1')
        logo.id = 'logo'
        logo.textContent = NAME
    
        for (let i = 0; i < 3; i++) {
            const element = button('btn')
            element.textContent = NAMES[i]
            element.dataset.name = NAMES[i]
            element.id = NAMES[i].toLowerCase()
            btns.push(element)
        }
        
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.addEventListener('click' , () => {
                tab_swtich(element)
            })
            
        }

        div.append(logo)

        btns.forEach((e) => {div.append(e)})
    
        return div
    }
    
    

    const setup = () => {
        container.append(tab_header())
        container.append(content)
        
    }

    return { 
        setup
    }
}())

Display.setup()