import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input type="text" onChange={handleFilterChange} placeholder="Search..." />
    </div>
  );
};

export default SearchBox;

