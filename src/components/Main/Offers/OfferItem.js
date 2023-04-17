import classes from './OfferItem.module.css'
const OfferItem = props => {
	const onClickHandler = () => {
		const product = {
			img: props.img,
			alt: props.alt,
			nameOfEquipment: props.nameOfEquipment,
			price: props.price,
			id: props.id,
		}
		props.onshowSummaryHandler()
		props.onProduct(product)
	}

	return (
		<div tabIndex='1' onClick={onClickHandler} className={classes.offer__item}>
			<div className={classes['offer__box-img']}>
				<img src={props.img} alt={props.alt} className={classes.offer__img} />
			</div>
			<small>{props.typeOfEquipment}</small>
			<h3 className={classes['offer__item-h3']}>{props.nameOfEquipment}</h3>
			<div className={classes['offer__box-price']}>
				<p className={classes['offer__item-price']}>
					<del>{props.oldPrice}</del>
					<b>{props.price} zł</b>
				</p>
			</div>
			<small>{props.lowestPrice}</small>
		</div>
	)
}

export default OfferItem
