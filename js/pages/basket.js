import {getMainTitle} from '../components/mainTitle.js'
import {getDesc} from '../components/desc.js'

// Сторінка кошику
export function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')

    const mainTitle = getMainTitle('Кошик')
    const desc = getDesc('Сторінка в розробці')
    
    page.append(mainTitle, desc)
    return page
}