import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AuthReducer from './authSlice'


const persistConfig = {
  key: 'root',  // key in localstorage
  storage,  // storage type (local storage)
}

// combine reducer
const rootReducer = combineReducers({
     cart: CartReducer,
     auth: AuthReducer 
})

// wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
})


export const persistor = persistStore(store)