//  Utility functions for reducer

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, { ...cartItemToAdd , quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
    }

    return cartItems
}

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToDecrease.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        )
}