//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//Redux
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contactsAction';
//Components
import Notification from '../Notification';
//Styles
import styles from './ContactForm.module.css';
import fadeNotification from 'animation/fadeNotification.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,

		contacts: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				number: PropTypes.string.isRequired,
			}).isRequired,
		).isRequired,
	};

	state = {
		name: '',
		number: '',
		isNotice: false,
	};

	setNotificationTimeout = () => setTimeout(() => this.setState({ isNotice: false }), 2000);

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleFormSubmit = e => {
		e.preventDefault();

		const isContactExists = this.props.contacts.find(
			({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', number: '', isNotice: true });
			return this.setNotificationTimeout();
		}

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number, isNotice } = this.state;

		return (
			<>
				<CSSTransition in={isNotice} classNames={fadeNotification} timeout={250} unmountOnExit>
					<Notification />
				</CSSTransition>

				<form className={styles.form} onSubmit={this.handleFormSubmit}>
					<label>
						Name
						<input
							autoFocus
							type="text"
							name="name"
							value={name}
							autoComplete="off"
							className={styles.input}
							onChange={this.handleChange}
						/>
					</label>

					<label>
						Number
						<input
							type="text"
							name="number"
							value={number}
							autoComplete="off"
							className={styles.input}
							onChange={this.handleChange}
						/>
					</label>

					<button className={styles.button} type="submit">
						Add contact
					</button>
				</form>
			</>
		);
	}
}

const mapStateToProps = ({ contacts }) => ({
	contacts: contacts.items,
});

const mapDispatchToProps = {
	onAddContact: contactsAction.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
