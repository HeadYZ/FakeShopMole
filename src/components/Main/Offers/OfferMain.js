import { Fragment } from 'react'
import OfferItem from './OfferItem'

const DUMMY_ARRAY = [
	{
		imgDevice:
			'https://img.freepik.com/darmowe-wektory/realistyczny-szary-smartfon-z-trzema-aparatami_52683-29937.jpg?w=1380&t=st=1680461270~exp=1680461870~hmac=808733877a077db731056c2d7ba4895b0a59c700885ab9737a3020c46557b637',
		typeOfEquipment: 'Smartfon',
		nameOfEquipment: 'Huawei camel Viro ',
		oldPrice: 1699,
		salePrice: 1399,
		lowestPrice: 1699,
		id: 0,
	},
]

const OfferMain = props => {
	return (
		<Fragment>
			{DUMMY_ARRAY.map(product => (
				<OfferItem
					key={product.id}
					img={product.imgDevice}
					alt={product.alt}
					typeOfEquipment={product.typeOfEquipment}
					nameOfEquipment={product.nameOfEquipment}
					oldPrice={product.oldPrice}
					lowestPrice={`Najniższa cena sprzed ostatnich 30 dni: ${product.lowestPrice} zł`}
					price={product.salePrice}
					onProduct={props.onProduct}
					onshowSummaryHandler={props.onshowSummaryHandler}></OfferItem>
			))}
		</Fragment>
	)
}

export default OfferMain
