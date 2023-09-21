import { createList } from "./utility"

const MENUTEXT = 'Our menu has'
const ITEMS = ['Buffalo Style Chicken Egg Rolls' , 'Grilled Shrimp' , 'Chicken Wings']
const DISCRIPTIONS = ['Stuffed with chicken , pepporine ' , 'six schrimp in chobtle marinade ' , 'spicy chicken wings']

const Menu = (function()
{
    const setup = () => {
        let div = document.createElement('div')
        div.id = 'menu-container'

        let h1 = document.createElement('h1')
        h1.textContent = MENUTEXT

        let list = createList('list' , ITEMS , DISCRIPTIONS)

        div.append(h1)
        div.append(list)
        return div
    }

    return {
        setup
    }
}())

export {Menu}