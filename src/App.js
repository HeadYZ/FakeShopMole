import { Fragment, useState } from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Modal from './components/UI/Modal'
import Main from './components/Main/Main'

function App() {
	const [isModal, setIsModal] = useState(false)

	const showModalHandler = () => {
		setIsModal(true)
	}
	const hideModalHandler = () => {
		setIsModal(false)
	}

	return (
		<Fragment>
			{isModal && <Modal onHide={hideModalHandler} />}
			<Navigation />
			<Header />
			<Main onShow={showModalHandler} />
		</Fragment>
	)
}

export default App
