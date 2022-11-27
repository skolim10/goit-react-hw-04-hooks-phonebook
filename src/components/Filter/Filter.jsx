import propTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <input
      className={styles.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
