import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { CartProvider } from './context/CartContext.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <QueryClientProvider client={queryClient}>
         <CartProvider>
           <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                 <App />
              </PersistGate>
           </Provider>
         </CartProvider>
      </QueryClientProvider>
   </BrowserRouter>
)
