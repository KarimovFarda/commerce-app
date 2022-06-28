import productsRouter from './router/products'
import favouritesRouter from './router/favourites'
import AuthRouter from './router/auth'
const ROUTES = [
    {
        path: '/',
        router: AuthRouter

    },
    {
        path: '/products',
        router: productsRouter

    }, {
        path: "/favourites",
        router: favouritesRouter
    }




]

export default ROUTES