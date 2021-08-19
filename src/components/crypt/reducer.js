import { UPDATE_KEYS, UPDATE_ENCRYPTED_TEXT } from "./Cryptioncontext";


const reducer = (state, { type, ...action }) => {
	if (type === UPDATE_KEYS) {
		return { ...state, ...action.payload }
	}
	if (type === UPDATE_ENCRYPTED_TEXT) {

		return { ...state, ...action.payload }
	}
	return state;
}
export default reducer