import { NAME } from "./utility"

const HEADER_TEXT = `Welcome to ${NAME}`

const PARAGRAPH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi maxime deleniti qui sunt vero ab autem tempora. Distinctio, qui. Fugit blanditiis officiis tenetur nulla?'

const Home = (function(){
    const setup = () => {
        let div = document.createElement('div')
        div.id = 'home-container'
        div.dataset.id = 0
    
        let header = document.createElement('div')
        header.classList.add('home-header')
        header.textContent = HEADER_TEXT

        let p = document.createElement('p')
        p.textContent = PARAGRAPH
    
        div.append(header , p)
    
        return div
    }

    return {
        setup
    }

}())



export {Home , NAME}