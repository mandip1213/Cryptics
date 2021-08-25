import React, { useState, useEffect } from 'react';
import useCryptContext from './Cryptioncontext';
import useEncryption from '../utils/encrypt';

const Encryption = () => {
	const [inputText, setInputText] = useState("Hi")
	const { publicKey, updateEncryptedText, product } = useCryptContext()
	const { encryptedAscii, encryptedNumber } = useEncryption(inputText, publicKey, product)
	useEffect(() => {
		updateEncryptedText(encryptedNumber)
	}, [encryptedNumber, publicKey])


	const handleChange = ({ target: { value } }) => {
		setInputText(value)
	}


	return (<>
		<div className="encryption cryption__container">

			<h3 className="main-heading">
				Encryption
			</h3>

			<form action="submit">

				<label htmlFor="text-to-encrypt">Text to encrypt</label>
				<input
					id="text-to-encrypt"
					type="text"
					placeholder="lorem ipsum"
					value={inputText}
					onChange={handleChange}
				/>

			</form>

			<div className="encryption__product">product: <code>{product}</code> </div>
			<div className="encryption__public-key">Public Key: <code>{publicKey}</code> </div>
			<div className="encryption__encrypted-value">
				Encrypted Value: <code>{encryptedNumber.join()}</code>
			</div>
		</div>
	</>
	)
}

export default Encryption
