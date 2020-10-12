//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contactsAction';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, contacts, onChangeFilter }) =>
	contacts.length > 1 && (
		<div className={styles.filterWrapper}>
			<label>
				Find contacts by name
				<input
					type="text"
					value={value}
					autoComplete="off"
					className={styles.input}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = ({ contacts }) => ({
	value: contacts.filter,
	contacts: contacts.items,
});

const mapDispatchToProps = {
	onChangeFilter: contactsAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
