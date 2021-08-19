import React, { useState, useEffect } from 'react';
import { useGenerateKeys } from '../utils/generate';
import useCryptContext, { UPDATE_KEYS } from './Cryptioncontext';

const Generation = () => {
	const [{ p1, p2 }, setPrimes] = useState({ p1: 11, p2: 13 })
	const { updateKeys } = useCryptContext()
	const { keys: { publicKey, privateKey }, error, product } = useGenerateKeys(p1, p2)

	useEffect(() => {
		updateKeys(publicKey, privateKey, product)
	}, [publicKey, privateKey, product])


	const handleChange = e => {
		const { name, value } = e.target
		setPrimes(prev => ({ ...prev, [name]: value }))
	}

	return (<>
		{error && <div className="error">{error} </div>}
		<form className="generation__form" action="submit">
			<input type="number"
				min="2"
				placeholder="1st prime number"
				name="p1"
				value={p1}
				onChange={handleChange}
			/>

			<input type="number"
				min="2"
				placeholder="1st prime number"
				name="p2"
				value={p2}
				onChange={handleChange}
			/>

		</form>

		<div className="public__key">publicKey:  {publicKey} </div>
		<div className="private__key">privateKey:  {privateKey}</div>

	</>)
}

export default Generation
