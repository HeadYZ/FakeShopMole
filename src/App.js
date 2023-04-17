import { Fragment, useState } from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
import CartSummary from './components/Navigation/CartSummary'
import CartProvider from './components/store/CartProvider'

function App() {
	const [isShow, setIsShow] = useState(false)

	const showModalHandler = () => {
		setIsShow(true)
	}
	const hideModalHandler = () => {
		setIsShow(false)
	}

	return (
		<CartProvider>
			<Navigation onClick={showModalHandler} />
			{isShow && <CartSummary onClick={hideModalHandler} />}
			{!isShow && (
				<Fragment>
					<Header />
					<Main />
				</Fragment>
			)}
		</CartProvider>
	)
}

export default App
