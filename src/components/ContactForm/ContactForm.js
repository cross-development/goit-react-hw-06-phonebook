//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { name, number } = this.state;

		this.props.onAddContact(name, number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						className={styles.formInput}
						autoFocus
						type="text"
						name="name"
						autoComplete="off"
						value={name}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Number
					<input
						className={styles.formInput}
						autoFocus
						type="text"
						name="number"
						autoComplete="off"
						value={number}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.contactFormButton} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default ContactForm;
