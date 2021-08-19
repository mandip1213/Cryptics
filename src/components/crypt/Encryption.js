import React, { useState, useEffect } from 'react';
import useCryptContext from './Cryptioncontext';
import useEncryption from '../utils/encrypt';

const Encryption = () => {
	const [inputText, setInputText] = useState("")
	const { publicKey, updateEncryptedText, product } = useCryptContext()
	const { encryptedAscii, encryptedNumber } = useEncryption(inputText, publicKey, product)
	useEffect(() => {
		updateEncryptedText(encryptedNumber)
	}, [encryptedNumber, publicKey])


	const handleChange = ({ target: { value } }) => {
		setInputText(value)
	}


	return (<>

		<form action="submit">
			<input
				type="text"
				placeholder="lorem ipsum"
				value={inputText}
				onChange={handleChange}
			/>
		</form>
		<div className="encrypted">{encryptedAscii} {product} </div>
		<div className="encrypted">{encryptedNumber.join()}</div>
	</>
	)
}

export default Encryption
