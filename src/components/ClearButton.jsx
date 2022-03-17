import { Alert, Button, Intent } from '@blueprintjs/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearTable, filterTable } from '../redux/tableSlice';

export default function ClearButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  function clear() {
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
        intent={Intent.DANGER}
        onCancel={() => setIsOpen(false)}
        onConfirm={clear}
      >
        Are you sure you want to clear the table?
      </Alert>
      <Button icon="cross" onClick={() => setIsOpen(true)}></Button>
    </>
  );
}
