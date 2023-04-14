import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CartContext from '../store/cart-context'
const Cart = props => {
	const element = <FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
	const cartCtx = useContext(CartContext)

	const numberOfProducts = cartCtx.items.length

	return (
		<div className={classes.cart} onClick={props.onClick}>
			{element}
			<div className={classes.cart__count}>
				<p>{numberOfProducts}</p>
			</div>
			<p className={classes.cart__text}>Koszyk</p>
		</div>
	)
}

export default Cart
