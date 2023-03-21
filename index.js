import { v4 as uuidv4 } from 'uuid';

class IdUtility {
	static generateId() {
		return uuidv4();
	}

	static generateLongId() {
		return uuidv4();
	}

	static generateShortId() {
		return uuidv4();
	}

	static setAlphabet(alphabet) {
	}

	static setLengthLong(length) {
	}

	static setLengthShort(length) {
	}

	static translateToShortId(id) {
	}

	static translateToId(id) {
	}
}

export default IdUtility;
