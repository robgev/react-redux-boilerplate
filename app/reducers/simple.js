import * as types from '../action-types';

const increment = count => {
	return ++count;
}

export default (count = 0, action) => {
	switch (action.type) {
		case types.COUNT_INCREMENT:
			return increment(count);
		default:
			return count;
	}
}
