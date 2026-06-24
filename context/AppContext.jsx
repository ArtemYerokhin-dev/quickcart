'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY

    const [products, setProducts] = useState([])
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(true)
    const [cartItems, setCartItems] = useState({})
    const [addresses, setAddresses] = useState([])
    const [orders, setOrders] = useState([])

    const fetchProductData = async () => {
        setProducts(productsDummyData)
    }

    const fetchUserData = async () => {
        setUserData(userDummyData)
    }

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to cart")
    }

    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo && cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    const addAddress = (address) => {
        const updated = [...addresses, address]
        setAddresses(updated)
        if (typeof window !== 'undefined') {
            localStorage.setItem('qc_addresses', JSON.stringify(updated))
        }
    }

    const placeOrder = (address) => {
        const cartAmount = getCartAmount()
        const tax = Math.floor(cartAmount * 0.02)
        const items = Object.entries(cartItems)
            .filter(([, qty]) => qty > 0)
            .map(([id, quantity]) => ({
                product: products.find(p => p._id === id),
                quantity,
            }))

        const newOrder = {
            id: Date.now().toString(),
            items,
            address,
            amount: cartAmount + tax,
            date: Date.now(),
            status: 'Order Placed',
            paymentMethod: 'COD',
            paymentStatus: 'Pending',
        }

        const updated = [newOrder, ...orders]
        setOrders(updated)
        setCartItems({})
        if (typeof window !== 'undefined') {
            localStorage.setItem('qc_orders', JSON.stringify(updated))
            localStorage.setItem('qc_cart', JSON.stringify({}))
        }
    }

    useEffect(() => {
        fetchProductData()
        fetchUserData()
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('qc_cart')
            const savedAddresses = localStorage.getItem('qc_addresses')
            const savedOrders = localStorage.getItem('qc_orders')
            if (savedCart) setCartItems(JSON.parse(savedCart))
            if (savedAddresses) setAddresses(JSON.parse(savedAddresses))
            if (savedOrders) setOrders(JSON.parse(savedOrders))
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined' && Object.keys(cartItems).length >= 0) {
            localStorage.setItem('qc_cart', JSON.stringify(cartItems))
        }
    }, [cartItems])

    const value = {
        currency,
        isSeller, setIsSeller,
        userData, fetchUserData,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount,
        addresses, addAddress,
        orders, placeOrder,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
