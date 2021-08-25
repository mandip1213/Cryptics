


const decrypt = (encrypted, d, n) => {
	const decryptedArr = encrypted.split(",").map(number => {
		let decrypted = 1;
		for (let iteration = 1; iteration <= d; iteration++) {
			decrypted *= number;
			decrypted = decrypted % n;
		}
		return String.fromCharCode(decrypted);
	})
	return decryptedArr.join("");
}

export default decrypt;