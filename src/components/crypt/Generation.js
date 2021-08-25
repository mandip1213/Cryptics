import React, { useState, useEffect } from 'react';
import { useGenerateKeys } from '../utils/generate';
import useCryptContext, { UPDATE_KEYS } from './Cryptioncontext';
import showOffImage from "../images/encrypt.jpg"

const Generation = () => {
	const [{ p1, p2 }, setPrimes] = useState({ p1: 11, p2: 13 })
	const [validateError, setValidateError] = useState("")
	const { updateKeys } = useCryptContext()
	const { keys: { publicKey, privateKey }, error, product } = useGenerateKeys(p1, p2)

	useEffect(() => {
		updateKeys(publicKey, privateKey, product)
	}, [publicKey, privateKey, product])


	const handleChange = e => {
		const { name, value } = e.target
		if (value > 10000) {
			return setValidateError("Please enter number less than 10000")
		}
		setPrimes(prev => ({ ...prev, [name]: value }))
		return setValidateError("")
	}

	return (<>
		<div className="generation-wrapper">
			<div className="generation">

				<h3 className="main-heading">Key Generation</h3>

				<form className="generation__form" action="submit">
					<div className="generation__input-container">
						<label htmlFor="p1">First prime number:</label>
						<input type="number"
							min="2"
							max="1000"
							placeholder="1st prime number"
							id="p1"
							name="p1"
							value={p1}
							onChange={handleChange}
						/>
					</div>

					<div className="generation__input-container">
						<label htmlFor="p2">Second prime number:</label>
						<input type="number"
							min="2"
							max="1000"
							placeholder="1st prime number"
							id="p2"
							name="p2"
							value={p2}
							onChange={handleChange}
						/>
					</div>

				</form>
				{validateError && <div className={`error generation__info`}>{validateError} </div>}
				{<div className={`${error && "error"} generation__info`}>{error ? error : "Lets Encrypt!!! "} </div>}
				<div className="generation__keys">
					<div className="generation__public-key"> <span>	Public Key :</span>  {publicKey} </div>
					<div className="generation__private-key"> <span> Private Key :</span>  {privateKey}</div>
				</div>
			</div>
			<img src={showOffImage} className="show-off-image" alt="" />
		</div>
	</>)
}

export default Generation
