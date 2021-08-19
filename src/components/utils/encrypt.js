import { useState, useEffect } from "react";

const encrypt = (text, e, n) => {
	const encryptedAscii = text.split("").reduce(({ encryptedAscii, encryptedNumber }, item) => {
		const ascii = item.charCodeAt()
		let encrypted = 1;
		for (let iteration = 1; iteration <= e; iteration++) {
			encrypted *= ascii
			encrypted = encrypted % n
		}
		return {
			encryptedAscii: encryptedAscii + String.fromCharCode(encrypted),
			encryptedNumber: [...encryptedNumber, encrypted]
		}
	}, {
		encryptedAscii: "",
		encryptedNumber: []
	})

	return encryptedAscii;
}



const useEncryption = (text, privateKey, product) => {
	const [encryptedData, setEncryptedData] = useState({ encryptedAscii: "", encryptedNumber: [] })

	useEffect(() => {
		const encrypted = encrypt(text, privateKey, product)
		setEncryptedData(encrypted)
	}, [text, privateKey, product]);

	return encryptedData
}

export default useEncryption