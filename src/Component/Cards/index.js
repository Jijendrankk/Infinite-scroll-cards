import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../SharedComponents/Card';
import { fetchCardsDetails } from '../../redux/actions';
import { cardLimit } from '../../Utils/constants';
import styles from './index.module.css';

const Cards = () => {
	const dispatch = useDispatch();
	const totalCards = useSelector((state) => state.updateCardsDetails); // getting card details from global state
	const [totalPage, setTotalPage] = useState(1); // state for page counting purpose
	/**
	 * trigger the API call based on dependencies
	 * dependency - totalPage
	 * @param {Number} - cardLimit
	 * @param {Number} - startWith
	 */
	useEffect(() => {
		dispatch(fetchCardsDetails(cardLimit, totalCards.data.length));
	}, [totalPage]);

	/**
	 * Add scroll event to window and unmount the event
	 */
	useEffect(() => {
		window.addEventListener('scroll', getScrollDetails);
		return () => window.removeEventListener('scroll', getScrollDetails);
	});

	/**
	 * Render each and every card using redux store data
	 */

	const renderCards = () => totalCards.data.map((card) => <Card {...card} />);

	/**
	 * Calculating the scroll position and updating the state value if the scroll position at the end
	 */
	const getScrollDetails = () => {
		let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		if (scrollHeight === scrollTop + clientHeight && totalCards.data.length / cardLimit >= totalPage) {
			setTotalPage(totalPage + 1);
		}
	};
	return (
		<div>
			<div className={styles.cardsContainer}>{renderCards()}</div>
			{totalCards.inProgress ? <div className={styles.loadingLabel}>Loading...</div> : null}
		</div>
	);
};

export default Cards;
