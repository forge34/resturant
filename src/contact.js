import { NAME } from "./utility"

const FB = `facebook.com/${NAME}`
const INSTA = `instagram.com/${NAME}`
const PHONE = '(555) 555-1234'

let links = [FB , INSTA , PHONE]


const Contact = (function(){

    const setup = () => {
        let div = document.createElement('div')
        div.id = 'contact-container'
        div.dataset.id = 2

        let contact_us = document.createElement('h1')
        contact_us.id = 'cont-us'
        contact_us.textContent = 'Contact us at :'

        let h3_arr = []

        for (let i = 0; i < links.length; i++) {
            const element = links[i];

            let h3 = document.createElement('h3')
            h3.textContent = element
            h3.classList.add('contact-text')
            
            h3_arr.push(h3)
        }

        div.append(contact_us)

        h3_arr.forEach((e) => div.append(e))

        return div 
    }

    return {
        setup
    }
}())

export {Contact}