import { useContext } from 'react'
import CartContext from '../store/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import classes from './CartSummaryItem.module.css'

const plusElement = <FontAwesomeIcon icon={faPlus} />
const minusElement = <FontAwesomeIcon icon={faMinus} />

const CartSummaryItem = props => {
	const cartCtx = useContext(CartContext)
	const addProductHandler = () => {
		cartCtx.addItem({
			productId: props.productId,
			productName: props.productName,
			productPrice: props.productPrice,
			productAmount: 1,
		})
	}

	const removeProductHandler = () => {
		cartCtx.removeItem(props.productId)
	}

	return (
		<li className={classes.list__item}>
			<div className={classes['list__item-box']}>
				<div className={classes['list__item-box-img']}>
					<img className={classes['list__item-img']} src={props.productImg} alt={props.productImgAlt}></img>
				</div>
				<div className={classes['list__item-name']}>
					<span>
						<b>{props.productName}</b>
					</span>
				</div>
			</div>
			<div className={classes['list__item-box-price']}>
				<div>
					<small>Cena:</small>
					<p>
						<b>{props.productPrice} zł</b>
					</p>
				</div>
				<div className={classes['list__item-tools']}>
					<button onClick={addProductHandler}>{plusElement}</button>
					<input value={props.productAmount} readOnly></input>
					<button onClick={removeProductHandler}>{minusElement}</button>
				</div>
				<div>
					<small>Wartość:</small>
					<p>
						<b>{props.priceForProducts} zł</b>
					</p>
				</div>
			</div>
		</li>
	)
}

export default CartSummaryItem
