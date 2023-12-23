import {getMainTitle} from '../components/mainTitle.js'
import {getDesc} from '../components/desc.js'

// Сторінка товара
export function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')

    const mainTitle = getMainTitle('Продукт')
    const desc = getDesc('Сторінка в розробці')
    
    page.append(mainTitle, desc)
    return page
}