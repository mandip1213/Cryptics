import React, { useState, useEffect } from 'react';
import useCryptContext from './Cryptioncontext';
import decrypt from "../utils/decrypt"

const Decryption = () => {
	const [decryptedText, setDecryptedText] = useState("")

	const { encryptedText: initialEncryptedText, privateKey, product } = useCryptContext()

	const [encryptedText, setEncryptedText] = useState(initialEncryptedText.join())

	useEffect(() => {
		const decrypted = decrypt(encryptedText, privateKey, product)
		//decrypt function  suppose  encryptedText to be list of numbers separated by comma

		setDecryptedText(decrypted)

	}, [encryptedText, privateKey, product])

	useEffect(() => {
		setEncryptedText(initialEncryptedText.join())
		//if privateKey, product changes then the input field willl also get updated on what is on the input field of decrypted no mattter what the use manipulates on input of deryption(inly if privateKey or  product ) changes
	}, [privateKey, initialEncryptedText, product])

	return (<>
		<div className="decryption cryption__container">

			<h3 className="main-heading"> Decryption</h3>

			<form action="submit">
				<label htmlFor="encrypted_text">Code to Decrypt</label>
				<input
					id="encrypted_text"
					type="text"
					value={encryptedText}
					onChange={(e) => setEncryptedText(e.target.value)}
				// no matter react do .join() by default lol

				/>
			</form>

			<div className="decryption__product">product: <code>{product}</code> </div>
			<div className="decryption__private-key">Private Key : <code>{privateKey}</code> </div>
			<div className="decryption__decrypted-text">Decrypted text :  <code>{decryptedText}</code></div>

		</div>
	</>)
}

export default Decryption
