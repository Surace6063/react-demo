import { createContext, useState } from "react";

// create the context
export const CartContext = createContext()


// create provider component
export const CartProvider = ({children}) => {
    const [quantity,setQuantity] = useState(0)

    const increment = () => setQuantity(quantity + 1)
    const decrement = () => setQuantity(quantity - 1)


    return(
        <CartContext.Provider value={{quantity,increment,decrement}}>
            {children}
        </CartContext.Provider>
    )
}