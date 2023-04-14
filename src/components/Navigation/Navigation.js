import Cart from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Wrapper from '../UI/Wrapper'
import classes from './Navigation.module.css'
const Navigation = props => {
	const userElement = <FontAwesomeIcon icon={faUser} className={classes.navbar__icon} />
	const telElement = <FontAwesomeIcon icon={faPhoneVolume} className={classes.navbar__icon} />
	const locationElement = <FontAwesomeIcon icon={faLocationDot} className={classes.navbar__icon} />

	return (
		<nav className={classes.nav}>
			<Wrapper className={classes.wrapper}>
				<div className={classes.navbar}>
					<div className={classes.navbar__logo}>
						<a href='#' className={classes['navbar__logo-title']}>
							Mole Mole
						</a>
					</div>
					<div className={classes.navbar__box}>
						<ul className={classes.navbar__list}>
							<li className={classes['navbar__list-item']}>
								{userElement}
								<a href='#' className={classes['navbar__list-link']}>
									Zaloguj
								</a>
							</li>
							<li className={classes['navbar__list-item']}>
								{telElement}
								<a href='#' className={classes['navbar__list-link']}>
									Pomoc i kontakt
								</a>
							</li>
							<li className={classes['navbar__list-item']}>
								{locationElement}
								<a href='#' className={classes['navbar__list-link']}>
									Znajdź sklep
								</a>
							</li>
						</ul>
						<Cart onClick={props.onClick} />
					</div>
				</div>
			</Wrapper>
		</nav>
	)
}

export default Navigation
