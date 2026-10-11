import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])


    const products = [
        {
            id: 1,
            name: "iPhone 13 Pro",
            brand: "Apple",
            price: 120000,
            stock: 5
        },
        {
            id: 2,
            name: "Galaxy S23",
            brand: "Samsung",
            price: 150000,
            stock: 3
        },
        {
            id: 3,
            name: "AirPods Pro",
            brand: "Apple",
            price: 45000,
            stock: 10
        }
    ];

    const addProduct = (product) => {
        setCartItem(prev => [...prev, product])
    }
    const removeProduct = (id) => {
        setCartItem(prev =>
            prev.filter(product => product.id !== id)
        )
    }
    const cartValue = {
        products,
        cartItem,
        addProduct,
        removeProduct
    }

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider