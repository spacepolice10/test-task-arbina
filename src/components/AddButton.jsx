import { Button, Divider, InputGroup } from '@blueprintjs/core';
import { Popover2, Tooltip2 } from '@blueprintjs/popover2';

function AddInput() {
  return (
    <section style={{ display: 'flex', padding: 10 }}>
      <InputGroup />
      <Divider />
      <Button icon="arrow-right" />
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
