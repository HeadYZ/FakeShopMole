import { Fragment, useState } from 'react'
import classes from './Offer.module.css'
import OfferMain from './OfferMain'
import OfferProducts from './OfferProducts'
import OfferSummary from './OfferSummary'
const Offer = () => {
	const [isSummary, setIsSummary] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState('')
	const productHandler = product => {
		setSelectedProduct(product)
	}

	const showSummaryHandler = () => {
		setIsSummary(true)
	}

	const hideSummaryHandler = () => {
		setIsSummary(false)
	}

	return (
		<Fragment>
			{isSummary && <OfferSummary onSelectedProduct={selectedProduct} onClick={hideSummaryHandler}></OfferSummary>}
			<section className={classes.offer}>
				<div className={`${classes.offer__boxes} ${classes['offer__boxes--first']}`}>
					<h2 className={classes.offer__h2}>Okazja dnia</h2>
					<div className={classes.offer__box}>
						<OfferMain onProduct={productHandler} onshowSummaryHandler={showSummaryHandler} />
					</div>
				</div>
				<div className={`${classes.offer__boxes} ${classes['offer__boxes--second']}`}>
					<h2 className={classes.offer__h2}>
						Najnowsze <span>produkty</span>
					</h2>
					<div className={classes['offer__box--second']}>
						<OfferProducts onProduct={productHandler} onshowSummaryHandler={showSummaryHandler} />
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default Offer
