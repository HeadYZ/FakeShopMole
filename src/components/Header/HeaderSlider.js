import headerData from './headerData.js'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Wrapper from '../UI/Wrapper'
import classes from './HeaderSlider.module.css'
import './HeaderSlider.css'
import { useState, useEffect } from 'react'
const HeaderSlider = () => {
	const [slide, setSlide] = useState(headerData)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const lastIndex = slide.length - 1
		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index, slide])

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 5000)
		return () => clearInterval(slider)
	}, [index])

	return (
		<Wrapper className={classes.wrapper}>
			{headerData.map((data, dataIndex) => {
				let position = 'nextSlide'

				if (dataIndex === index) {
					position = 'activeSlide'
				}

				if (dataIndex === index - 1 || (index === 0 && dataIndex === slide.length - 1)) {
					position = 'lastSlide'
				}

				return (
					<div key={dataIndex} className={`header__slider ${position}`}>
						<img src={data.img} alt={data.alt} className={classes.header__img}></img>
						<div className={classes['header__slider-text']}>
							<p>{data.text}</p>
						</div>
						<button className={classes['header__btn-prev']} onClick={() => setIndex(index - 1)}>
							<FiChevronLeft />
						</button>
						<button className={classes['header__btn-next']} onClick={() => setIndex(index + 1)}>
							<FiChevronRight />
						</button>
					</div>
				)
			})}
		</Wrapper>
	)
}

export default HeaderSlider
