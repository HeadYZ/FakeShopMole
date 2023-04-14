import HeaderSlider from './HeaderSlider'
import classes from './Header.module.css'
const Header = () => {
	return (
		<header className={classes.header}>
			<HeaderSlider></HeaderSlider>
		</header>
	)
}

export default Header
