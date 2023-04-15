import { Fragment } from 'react'
import products from './products'
import OfferItem from './OfferItem'

const OfferProducts = props => {
	return (
		<Fragment>
			{products.map(product => (
				<OfferItem
					key={product.id}
					img={product.imgDevice}
					alt={product.alt}
					typeOfEquipment={product.typeOfEquipment}
					nameOfEquipment={product.nameOfEquipment}
					price={product.price}

					onProduct={props.onProduct}
					onshowSummaryHandler={props.onshowSummaryHandler}></OfferItem>
			))}
		</Fragment>
	)
}

export default OfferProducts
