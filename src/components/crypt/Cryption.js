import React from 'react';
import Encryption from './Encryption';
import Decryption from './Decryption';
import useCryptContext, { CryptProvider } from './Cryptioncontext';
import Generation from './Generation';


const CryptionComponent = () => {
	return (<>
		<div className="container generation">
			<h3> Key Generation</h3>
			<Generation />
		</div>
		<div className="container encryption">
			<h3> Encryption</h3>
			<Encryption />
		</div>
		<div className="container decryption">
			<h3> Decryption</h3>
			<Decryption />
		</div>

	</>)
}

const Cryption = () => <CryptProvider><CryptionComponent /></CryptProvider> /* context provider*/

export default Cryption