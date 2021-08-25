import React, { useRef, useEffect } from 'react';
import MarkdownComp from '../markdown/Markdown';
import Navbar from '../DocNavbar/Navbar';
import leftQuote from "../images/left.svg"
import rightQuote from "../images/right.svg";
import "./Documentation.css";
import Card from '../card/Card';


const Documentation = () => {
	return (<>
		<div className="docs-container">
			<div className="docs-quote">
				<img className="docs-quote__image" src={leftQuote} alt="" />
				When flimsy cyber defense fails, Format Preserving Encryption prevails
				<img className="docs-quote__image" src={rightQuote} alt="" />
			</div>
			<div className="docs-wrapper">
				<Navbar />
				<MarkdownComp />
			</div>
		</div>


	</>)
}

export default Documentation
