import { combineReducers, createStore } from 'redux'
import productsData from '../data/products'
import productsReducer from '../ducks/products'
import cartReducer from '../ducks/cart'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
})

const store = createStore(rootReducer, {
    products: productsData, // initial store values
})

export default store
