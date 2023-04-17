import { useReducer } from 'react'
import CartContext from './cart-context'

const defaulCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		let updatedItems
		const updatedTotalAmmount = state.totalAmount + action.item.productPrice * action.item.productAmount
		const existingCartItemIndex = state.items.findIndex(item => item.productId === action.item.productId)

		const existingCartItem = state.items[existingCartItemIndex]

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				productAmount: existingCartItem.productAmount + action.item.productAmount,
				priceForProducts: (existingCartItem.productAmount + action.item.productAmount) * existingCartItem.productPrice,
			}
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		} else {
			updatedItems = state.items.concat(action.item)
		}
		return { items: updatedItems, totalAmount: updatedTotalAmmount }
	}
	if (action.type === 'REMOVE') {
		let updatedItems

		const existingCartItemIndex = state.items.findIndex(item => item.productId === action.id)
		const existingCartItem = state.items[existingCartItemIndex]

		const updatedTotalAmmount = state.totalAmount - existingCartItem.productPrice

		if (existingCartItem.productAmount === 1) {
			updatedItems = state.items.filter(item => item.productId !== action.id)
		} else {
			const updatedItem = {
				...existingCartItem,
				productAmount: existingCartItem.productAmount - 1,
				priceForProducts: (existingCartItem.productAmount - 1) * existingCartItem.productPrice,
			}
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		}

		return { items: updatedItems, totalAmount: updatedTotalAmmount }
	}
	return defaulCartState
}

const CartProvider = props => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaulCartState)

	const addItemToCartHandler = item => {
		dispatchCart({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = id => {
		dispatchCart({ type: 'REMOVE', id: id })
	}
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	}
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider
