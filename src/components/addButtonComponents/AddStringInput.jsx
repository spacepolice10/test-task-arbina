import { Button, Divider, InputGroup } from '@blueprintjs/core';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewString, filterTable } from '../../redux/tableSlice';

export default function AddStringInput({ setIsOpen }) {
  const [input, setInput] = useState('');
  useEffect(() => {
    inputEl.current.focus();
  });
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  // empty string passed to function filterTable so the filterTable store updated without mutating any persistent data
  function updateStore() {
    dispatch(addNewString(input));
    dispatch(filterTable(''));
    setIsOpen(false);
  }
  // handle searchInput data via keyboard
  function updateStoreUsingKeyboard(e) {
    if (e.key == 'Enter') {
      updateStore();
      setIsOpen(false);
    }
  }
  return (
    <section style={{ display: 'flex', padding: 10 }}>
      <InputGroup
        inputRef={inputEl}
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onKeyPress={(e) => updateStoreUsingKeyboard(e)}
      />
      <Divider />
      <Button icon="arrow-right" onClick={updateStore} />
    </section>
  );
}
