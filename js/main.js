import {getHeader} from './components/header.js'
import {getPageContainer} from './components/pageContainer.js'

const app = document.getElementById('app')

export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()

router.on('/', async () => {
    pageContainer.innerHTML = '' 
    const moduleMain = await import('./pages/main.js')
    const mainPage = moduleMain.getMainPage()
    pageContainer.append(mainPage)
  });

router.on('/catalog', async () => {
    pageContainer.innerHTML = '' 
    const moduleCatalog = await import('./pages/catalog.js')
    const catalogPage = moduleCatalog.getCatalogPage()
    pageContainer.append(catalogPage) 
  });

router.on('/basket', async () => {
    pageContainer.innerHTML = '' 
    const moduleBasket = await import('./pages/basket.js')
    const basketPage = moduleBasket.getBasketPage()
    pageContainer.append(basketPage) 
  });  

router.resolve();

app.append(header, pageContainer)