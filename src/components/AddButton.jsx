import { Button } from '@blueprintjs/core';
import { Popover2, Tooltip2 } from '@blueprintjs/popover2';
import { useState } from 'react';

import AddStringInput from './addButtonComponents/AddStringInput';

export default function AddButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // control over popover state is taken so it is easier to add new data using keyboard
    <Popover2
      isOpen={isOpen}
      content={
        <>
          <AddStringInput setIsOpen={setIsOpen} />
        </>
      }
    >
      <Tooltip2 content="Click to add one more string">
        <Button icon="plus" onClick={() => setIsOpen(true)} />
      </Tooltip2>
    </Popover2>
  );
}
