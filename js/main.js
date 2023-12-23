import {getHeader} from './components/header.js'
import {getPageContainer} from './components/pageContainer.js'

// Сторінки
import {getMainPage} from './pages/main.js'
import {getCatalogPage} from './pages/catalog.js'
import {getBasketPage} from './pages/basket.js'

const app = document.getElementById('app')

const header = getHeader()
const pageContainer = getPageContainer()

// Навігація по сторінкам
export function navigation(page) {
    pageContainer.innerHTML = '';
    switch (page) {
        case 'catalog':
            const catalogPage = getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case 'basket':
            const basketPage = getBasketPage()
            pageContainer.append(basketPage)
            break
        default: 
            const mainPage = getMainPage()
            pageContainer.append(mainPage)
            break
    }
}

navigation()

// const productPage = getProductPage()
// pageContainer.append(productPage)

app.append(header, pageContainer)