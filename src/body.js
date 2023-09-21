import { Contact } from "./contact"
import {Home} from "./home-tab"
import { Menu } from "./menu"



const Body = (function(){
    let div = document.createElement('div')
    div.classList.add('container')

    let content = document.createElement('div')
    content.id = 'container-content'

    let home = Home.setup()
    let contact = Contact.setup()
    let menu = Menu.setup()

    const setup = () => {
        content.append(home)
        content.append(contact)
        content.append(menu)

        div.append(content)
        return div
    }

    return {
        setup
    }
}())

export {Body}