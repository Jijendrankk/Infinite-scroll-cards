import React from 'react';
import styles from './index.module.css';

const Card = ({ userId, id, title, body }) => {
	return (
		<section className={styles.cardSection}>
			<div className={styles.idBlock}>
				<div>
					<strong>UserId:</strong> {userId}
				</div>
				<div>
					<strong>Id:</strong> {id}
				</div>
			</div>
			<div className={styles.contentBlock}>
				<div className={styles.titleLabel}>{title}</div>
				<div className={styles.bodyLabel}>
					<strong>Summary:</strong> {body}
				</div>
			</div>
		</section>
	);
};

export default Card;
