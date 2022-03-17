import { Alert, Button, Intent } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearTable, filterTable } from '../redux/tableSlice';

export default function ClearButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // empty string passed to function filterTable so the filterTable store updated without mutating any persistent data
  function updateStore() {
    dispatch(clearTable());
    dispatch(filterTable(''));
    setIsOpen(false);
  }
  return (
    <>
      <Alert
        isOpen={isOpen}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        onCancel={() => setIsOpen(false)}
        onConfirm={updateStore}
        intent={Intent.DANGER}
      >
        Are you sure you want to clear the table?
      </Alert>
      <Tooltip2 content="Click to delete all the strings">
        <Button icon="cross" onClick={() => setIsOpen(true)}></Button>
      </Tooltip2>
    </>
  );
}
