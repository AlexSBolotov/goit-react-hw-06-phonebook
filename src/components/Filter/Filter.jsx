import s from './Filter.module.css';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export default function Filter() {
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState('')

  return (
    <div className={s.wrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
          // onFilterInputChange(e.currentTarget.value);
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  onFilterInputChange: PropTypes.func,
};
