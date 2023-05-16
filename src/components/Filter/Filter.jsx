import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import a from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={a}>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
