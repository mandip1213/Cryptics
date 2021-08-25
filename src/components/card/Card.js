import React from 'react';
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png";
import facebookIcon from "../images/facebook.png"
import "./Card.css";
import personalData from './data';


const CardComp = ({ item: { name, media, image } }) => {

	console.log(name)
	return (<>
		<div className="card card-hover">

			<div className="card__profile-image-container"><
				img src={image} alt="" className="card__profile-image" />
			</div>

			<div className="card__name">{name} </div>
			<div className="card__links">
				<a href={media.github} target="_blank" rel="noopener noreferrer">
					<img src={githubIcon} alt="" className="card__media-icon" />

				</a>

				<a href={media.linkedin || media.facebook} target="_blank" rel="noopener noreferrer">
					<img src={media.linkedin ? linkedinIcon : facebookIcon} alt="" className="card__media-icon" />
				</a>

			</div>
		</div>

	</>)
}
const Card = () => {

	return (<>
		<div id="cards-container" className="cards-wrapper">
			<h3 className="cards-container__heading">Behind The Scene</h3>
			<div className="cards-container">
				{personalData.map(item => <CardComp key={item.id} item={item} />)}
			</div>
		</div>
	</>
	)
}
export default Card
