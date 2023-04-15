import classes from './OfferSummary.module.css'
import Modal from '../../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const OfferSummary = props => {
	const productImg = props.onSelectedProduct.img
	const productImgAlt = props.onSelectedProduct.alt
	const productName = props.onSelectedProduct.nameOfEquipment
	const productPrice = props.onSelectedProduct.price

	const cartCtx = useContext(CartContext)

	const submitHandler = e => {
		const selectedProduct = {
			productName: productName,
			productPrice: productPrice,
		}

		cartCtx.addItem(selectedProduct)

		props.onClick()
	}

	return (
		<Modal onClick={props.onClick}>
			<div className={classes.modal__box}>
				<div className={classes['modal__box-img']}>
					<img className={classes.modal__img} src={productImg} alt={productImgAlt}></img>
				</div>
				<div className={classes['modal__box-info']}>
					<p className={classes['modal__product-name']}>{productName}</p>
					<div className={classes['modal__box-price']}>
						<p className={classes['modal__product-price']}>{productPrice} zł</p>
						<input type='number' min='1' max='5' step='1' defaultValue='1'></input>
					</div>
				</div>
			</div>
			<button type='button' className={classes.modal__button} onClick={submitHandler}>
				Dodaj do koszyka
			</button>
		</Modal>
	)
}

export default OfferSummary
