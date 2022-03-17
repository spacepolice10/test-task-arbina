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
  function filter(e) {
    dispatch(changeInputState(e.target.value));
    dispatch(filterTable(e.target.value));
  }
  return (
    <InputGroup
      onInput={(e) => filter(e)}
      value={input}
      leftIcon="search"
      placeholder="Search for the input"
    />
  );
}
