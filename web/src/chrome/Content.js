/**
 * content container
 * @author: Arie M. Prasetyo (2019)
 */

import React from 'react';
import styles from './Content.css';

const Content = props => (
	<div className={styles.Content}>
		{props.children}
	</div>
);

export default Content;