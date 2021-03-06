let initialState = {
	inProgress: false,
	data: [],
};
export const updateCardsDetails = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_CARD_DETAILS':
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};
