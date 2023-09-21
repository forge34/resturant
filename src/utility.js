const NAME = "Awesome Resturant"


const button = (classN) => {
    let btn = document.createElement('button')
    btn.classList.add(classN)

    return btn
}

const createList = (classN , items , discriptons=null) => {
    let list = document.createElement('dl')
    list.classList.add(classN)

    for (let i = 0; i< items.length; i++) {
      const element = document.createElement('dt')
      element.textContent = items[i]
      list.append(element)
       
      for (let i = 0; i < discriptons.length; i++) {
        const element = document.createElement('dd')
        element.textContent = discriptons[i]
        list.append(element)
      }
    }

    return list

}

export {button , NAME , createList}