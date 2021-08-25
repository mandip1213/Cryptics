import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const collpaseNavRef = useRef()
	const handleClick = (e) => {
		e.target.classList.toggle("rotate")
		collpaseNavRef.current.classList.toggle("hide")
	}
	return (<>
		<nav className="navbar">
			<h5><Link to="/" class="b1">Home</Link></h5>
			<section className="nav-group">
				<div ><h5 class="b1">Docs</h5></div>
				<ul className="nav-group">
					<li class="b2" ><a href="#asymmetric-encryption"> Asymmetric Encryption</a></li>
					<li class="b2" ><a href="#encryption">  Encryption</a> </li>
					<li>
						<section className="sub-nav-group">
							<div className="sub-nav-group--header">
								<a class="b2" href="#how-do-rsa-works-"> How do RSA works ?</a>
								<span class="angular-icon" onClick={handleClick}> &gt; </span>
							</div>
							<ul ref={collpaseNavRef} className="sub-nav-group--nav-items">
								<li class="b3" ><a href="#_generation-of-keys">Generation of keys</a></li>
								<li class="b3" ><a href="#_encryption">	Encryption</a></li>
								<li class="b3" ><a href="#_decryption">	Decryption</a></li>
							</ul>
						</section>
					</li>
					<li ><a class="b2" href="#rsa">  RSA</a></li>
					<li ><a class="b2" href="#advantages"> Advantages</a></li>
					<li ><a class="b2" href="#disadvantages"> Disadvantages</a></li>
				</ul>
			</section>

		</nav>

	</>)
}

export default Navbar
