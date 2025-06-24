import React from 'react'
import './Hero.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className="paddings innerWidth hero-container flexCenter">

				<div className=" flexColStart hero-left">
					<div className="hero-title">
						<div className="orange-circle"></div>
						<motion.h1 initial={{ y: "2rem", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 2, type: 'spring'
							}}>

							Discover<br /> More Suitable<br /> Property
						</motion.h1>
					</div>
					<div className=" flexColStart  hero-des">
						<span className='secondaryText'>
							Find a variety of properties that suit you very easilty
						</span>
						<span className='secondaryText'>Forget all difficulties in finding a residence for you</span>

						<div className=" flexCenter search-bar">
							<FaMapMarkerAlt color="var(--blue)" size={25} />
							<input type="text" />
							<button className='button '>Search</button>
						</div>
					</div>

					<div className="flexCenter stats">
						<div className="flexColCenter stat ">
							<span>
								<CountUp start={8800} end={9000} duration={4} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Premium Products</span>
						</div>

						<div className="flexColCenter stat ">
							<span>
								<CountUp start={1950} end={2000} duration={4} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Happy Customers</span>
						</div>

						<div className="flexColCenter stat ">
							<span>
								<CountUp end={28} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Award Winning </span>
						</div>

					</div>

				</div>

				{/* ----------------- */}

				<div className="hero-right flexCenter">
					<div className="image-container">
						<img src="./hero-image.png" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero