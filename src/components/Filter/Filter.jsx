import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import a from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={a}>
      <input
        type='text'
        name='filter'
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder='Find contacts by name'
      />
    </label>
  );
};

export default Filter;
