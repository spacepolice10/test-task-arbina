import { Button, Divider, InputGroup } from '@blueprintjs/core';
import { Popover2, Tooltip2 } from '@blueprintjs/popover2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewString } from '../redux/tableSlice';

function AddInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <section style={{ display: 'flex', padding: 10 }}>
      <InputGroup value={input} onInput={(e) => setInput(e.target.value)} />
      <Divider />
      <Button
        icon="arrow-right"
        onClick={() => dispatch(addNewString(input))}
      />
    </section>
  );
}

export default function AddButton() {
  return (
    <Popover2
      content={
        <>
          <AddInput />
        </>
      }
    >
      <Tooltip2 content="Click to add one more string">
        <Button icon="plus" />
      </Tooltip2>
    </Popover2>
  );
}
