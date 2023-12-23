import {getDesc} from '../components/desc.js'
import {getMainTitle} from '../components/mainTitle.js'

// Сторінка каталог
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Каталог')
    const desc = getDesc('Сторінка в розробці')
    
    page.append(mainTitle, desc)
    return page
}