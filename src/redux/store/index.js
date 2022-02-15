import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import productsReducer from '../reducers/productsReducer.js';
import usersReducer from '../reducers/usersReducer.js';
import commentReducer from '../reducers/commentReducer.js';
import cartReducer from '../reducers/cartReducer';


const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

  products: {
    result: [],
    isError: false,
    isLoading: true,
    query: '',
  },

  users: {
    content: [],
  },

  comments: {
    content: []
  },

  cart: {
    content: [],
    quantity: 1,
    total : 0
  }
}


const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  comments: commentReducer,
  cart: cartReducer
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)

const configureStore = createStore(
  persistedBigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
)


export const persistor = persistStore(configureStore)
export default configureStore