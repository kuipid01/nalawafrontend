/* eslint-disable react/prop-types */
import { createContext, useEffect,useState } from "react";

export const CartContext = createContext() 
const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    useEffect(() => {
        const data = window.localStorage.getItem('CART');
        if ( data !== null ) setCart(JSON.parse(data));
      }, []);
    useEffect(() => {
        window.localStorage.setItem('CART', JSON.stringify(cart));
      }, [cart]);

    return ( 
        <CartContext.Provider value={{cart, setCart}} >
         {children}
        </CartContext.Provider>
 )
}
export default CartContextProvider