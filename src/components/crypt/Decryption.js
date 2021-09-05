import React, { useState, useEffect } from 'react';
import useCryptContext from './Cryptioncontext';
import decrypt from "../utils/decrypt"
const Decryption = () => {
	const [decryptedText, setDecryptedText] = useState("")
	const [error, setError] = useState("")
	// const [, ] = useState(initialState)


	const [isReadOnly, setIsReadOnly] = useState(true)
	const [{ decryptProduct, decryptPrivateKey }, setDecryptKeys] = useState({ decryptProduct: 143, decryptPrivateKey: 77 })

	const { encryptedText: initialEncryptedText, privateKey, product } = useCryptContext()

	const [encryptedText, setEncryptedText] = useState(initialEncryptedText.join())

	useEffect(() => {
		if (isReadOnly) {
			const decrypted = decrypt(encryptedText, privateKey, product)
			//decrypt function  suppose  encryptedText to be list of numbers separated by comma
			setDecryptedText(decrypted)
			return;
		}
		if (decryptPrivateKey < 2 || decryptProduct < 2) {
			return setError("Please enter value greater than 1")
		}
		const decrypted = decrypt(encryptedText, decryptPrivateKey, decryptProduct)
		//decrypt function  suppose  encryptedText to be list of numbers separated by comma
		setDecryptedText(decrypted)
	}, [encryptedText, privateKey, product, decryptPrivateKey, decryptProduct, isReadOnly])

	useEffect(() => {
		if (isReadOnly) {
			setEncryptedText(initialEncryptedText.join())
		}
		if (!isReadOnly) {
			setEncryptedText("128,40")
		}
		//if privateKey, product changes then the input field willl also get updated on what is on the input field of decrypted no mattter what the use manipulates on input of deryption(inly if privateKey or  product ) changes
	}, [isReadOnly, privateKey, initialEncryptedText, product])

	const handleChange = ({ target: { name, value } }) => {
		if (value > 10000) {
			return setError("please Enter keys less than 10000")
		}
		setError("")
		setDecryptKeys(prev => ({ ...prev, [name]: value }))
	}

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

				<span
					type="none"
className="emergency__class"
					onClick={() => { setIsReadOnly(prev => !prev) }}>edit</span>
			</form>
			{isReadOnly ? <><div className="decryption__product">product: <code>{product}</code> </div>
				<div className="decryption__private-key">Private Key : <code>{privateKey}</code> </div>

			</> : <>
				{error && <div className=" decryption__error">{error}</div>}
				<div>
					<label htmlFor="decryptProduct">Product: </label>
					<input type="number"
						min="1"
						id="decryptProduct"
						name="decryptProduct"
						value={decryptProduct}
						onChange={handleChange}
					/></div>
				<div><label htmlFor="decryptPrivateKey">Private Key:</label>
					<input type="number"
						min="1"
						id="decryptPrivateKey"
						name="decryptPrivateKey"
						value={decryptPrivateKey}
						onChange={handleChange}
					/>
				</div>
			</>}
			<div className="decryption__decrypted-text">Decrypted text :  <code>{decryptedText}</code></div>
		</div>
	</>)
}

export default Decryption
