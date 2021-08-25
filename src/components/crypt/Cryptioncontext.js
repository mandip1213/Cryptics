import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";


export const UPDATE_KEYS = "UPDATE_KEYS",
	UPDATE_ENCRYPTED_TEXT = "UPDATE_ENCRYPTED_TEXT";

const INITIAL_STATE = {
	publicKey: 7,
	privateKey: 223,
	encryptedText: [65, 79, 118, 59, 129, 45],//aviato
	product: 11 * 13,
}

const cryptContext = createContext()

export const CryptProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

	const updateKeys = (publicKey, privateKey, product) => dispatch({ type: UPDATE_KEYS, payload: { publicKey, privateKey, product } })
	const updateEncryptedText = (encryptedText) => dispatch({ type: UPDATE_ENCRYPTED_TEXT, payload: { encryptedText } })


	const value = { ...state, updateKeys, updateEncryptedText }
	return (<>
		<cryptContext.Provider value={value}>{children} </cryptContext.Provider>
	</>)
}

const useCryptContext = () => useContext(cryptContext);
export default useCryptContext