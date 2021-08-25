import React from 'react';
import Encryption from './Encryption';
import Decryption from './Decryption';
import useCryptContext, { CryptProvider } from './Cryptioncontext';
import Generation from './Generation';
import "./Cryption.css";


const CryptionComponent = () => {
	return (<>
		<div id="cryption-container" className="cryption-wrapper">
			<div className="cryption-main-container">
				<Generation />
				<div className="cryption-container">
					<Encryption />
					<Decryption />

				</div>
			</div>
		</div>
	</>)
}


const Cryption = () => <CryptProvider><CryptionComponent /></CryptProvider> /* context provider*/

export default Cryption
