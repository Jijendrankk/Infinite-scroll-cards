export const fetchCardsDetails = (limit = 10, startWith = 0) => {
	return async (dispatch, getState) => {
		let cardsData = Object.assign({}, getState().updateCardsDetails);
		dispatch({
			type: 'UPDATE_CARD_DETAILS',
			payload: {
				inProgress: true,
				data: cardsData?.data || [],
			},
		});
		let response = await fetch(`http://jsonplaceholder.typicode.com/posts?_start=${startWith}&_limit=${limit}`);

		try {
			if (response.status === 200) {
				let newCards = await response.json();
				cardsData.data = [...(cardsData?.data || []), ...newCards];
			}
		} catch (err) {
			console.log(err);
		} finally {
			cardsData.inProgress = false;
			dispatch({
				type: 'UPDATE_CARD_DETAILS',
				payload: cardsData,
			});
		}
	};
};
