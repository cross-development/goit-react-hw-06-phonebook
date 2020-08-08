//Core
import PropTypes from 'prop-types';

const contactListTypes = {
	onRemoveContact: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default contactListTypes;