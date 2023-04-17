import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import CartSummaryItem from './CartSummaryItem'
import { useContext } from 'react'
import CartContext from '../store/cart-context'
import classes from './CartSummary.module.css'
import Wrapper from '../UI/Wrapper'
const CartSummary = props => {
	const cartCtx = useContext(CartContext)
	const leftArrow = <FontAwesomeIcon icon={faChevronLeft} />
	const rightArrow = <FontAwesomeIcon icon={faChevronRight} />
	const numberOfProducts = cartCtx.items.length
	console.log(numberOfProducts)
	if (numberOfProducts === 0) {
		return (
			<Wrapper className={classes.cart}>
				<h2>Twój koszyk jest pusty</h2>

				<div className={classes.cart}>
					<div className={classes['cart__box-btn']}>
						<button onClick={props.onClick}>{leftArrow} Wróć do zakupów</button>
					</div>
				</div>
			</Wrapper>
		)
	}
	if (numberOfProducts > 0) {
		return (
			<Wrapper className={classes.cart}>
				<ol>
					{cartCtx.items.map(product => (
						<CartSummaryItem
							productName={product.productName}
							productPrice={product.productPrice}
							productAmount={product.productAmount}
							key={product.productId}
							productId={product.productId}
							productImg={product.productImg}
							productImgAlt={product.productImgAlt}
							priceForProducts={product.priceForProducts}></CartSummaryItem>
					))}
				</ol>
				<p>
					<b>
						Łącznie: <span className={classes['cart__total-amount']}>{cartCtx.totalAmount} zł</span>{' '}
					</b>
				</p>
				<div className={classes['cart__box-btn']}>
					<button className={classes['cart__return-btn']} onClick={props.onClick}>
						{leftArrow} Wróć do zakupów
					</button>
					<button className={classes.cart__btn}>Przejdź dalej {rightArrow}</button>
				</div>
			</Wrapper>
		)
	}
}

export default CartSummary
