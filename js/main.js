const app = document.getElementById('app')

// Створити шапку
function getHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const container = document.createElement('div')
    container.classList.add('container', 'header__container')

    const nav = document.createElement('nav')
    nav.classList.add('navigation')

    let link1 = document.createElement('a')
    link1.href = ""
    link1.classList.add('btn')
    link1.textContent = 'Головна сторінка'

    let link2 = document.createElement('a')
    link2.href = ""
    link2.classList.add('btn')
    link2.textContent = 'Каталог'

    let link3 = document.createElement('a')
    link3.href = ""
    link3.classList.add('btn')
    link3.textContent = 'Кошик'

    nav.append(link1, link2, link3)
    container.append(nav)
    header.append(container)

    return header
}

// Контейнер для сторінок
function getPageContainer() {
    const main = document.createElement('main')
    main.classList.add('page-container')

    return main
}

// Створює головний заголовок
function getMainTitle(text) {
    const title = document.createElement('h1')
    title.classList.add('main-title')
    title.textContent = text

    return title
}

// Головна сторінка
function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')

    const mainTitle = getMainTitle('Головна сторінка')
    
    const list = document.createElement('ul')
    list.classList.add('product-list', 'list-reset')

    page.append(mainTitle, list)
    return page
}

const header = getHeader()
const mainContainer = getPageContainer()

const mainPage = getMainPage()
mainContainer.append(mainPage)

app.append(header, mainContainer)