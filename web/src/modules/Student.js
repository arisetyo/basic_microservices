/**
 * student module interface
 * @author: Arie M. Prasetyo (2019)
 */

import React, {Component} from 'react';
import styles from './Student.css';
import {Button, Tag, ToggleButton} from '../interface';

class Student extends Component {
	state = {};

	componentDidMount() {
		// test API
		fetch('http://localhost:3000/')
		.then(response => response.json())
		.then(json => console.table(json))
	}

	onCreate = () => {
		console.log('create a new student');
	}

	render() {
		return (
			<div className={styles.Student}>
				<h1>Student module</h1>
				<Button onClick={this.onCreate}>Create +</Button>
			</div>
		);
	}
}

export default Student;