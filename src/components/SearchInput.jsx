import { InputGroup } from '@blueprintjs/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInputState,
  filterTable,
  searchInputState,
} from '../redux/tableSlice';

export default function SearchInput() {
  const dispatch = useDispatch();
  const input = useSelector(searchInputState);
  // Simultaneously both text in search input and in the table changed so both parameters stay persistent
  function filter(value) {
    dispatch(changeInputState(value));
    dispatch(filterTable(value));
  }
  return (
    <InputGroup
      onInput={(e) => filter(e.target.value)}
      value={input}
      leftIcon="filter"
      placeholder="Filter"
    />
  );
}
