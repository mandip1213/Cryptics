import React from 'react';
import logo from "../images/logo.png";
import "./Hero.css";
import { Link } from 'react-router-dom';
import detailsIcon from "../images/details.svg"

const Hero = () => {
	return (<>

		<div className="hero">
			<div className="hero__header">
				<img src={logo} alt="cryptics logo" className="hero__logo-image" />
				<div className="hero__text">
					<div className="hero__title">Cryptics - Encryption via RSA.</div>
					<div className="hero__subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, reiciendis.
						<div className="hero__details-icon-container">
							<img src={detailsIcon} className="hero__details-icon" alt="" />
							<span className="hero__tooltip">It's encrypted .</span>
						</div>
					</div>
				</div>
			</div>

			<div className="hero__buttons">
				<button className="hero__btn"><a href="#cryption-container"> Get Started</a></button>
				<button className="hero__btn"><Link to="/docs">	Docs</Link></button>

			</div>
			<div className="behind-the-scene"><a href="#cards-container">Behind the Scene</a></div>
		</div>

	</>)
}

export default Hero
