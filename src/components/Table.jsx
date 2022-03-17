import { Divider } from '@blueprintjs/core';
import React from 'react';

export default function Table() {
  const testList = ['Text1', 'Text2'];
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {React.Children.toArray(
          testList.map((e) => {
            return (
              <>
                <h1>{e}</h1>
                <Divider />
              </>
            );
          })
        )}
      </section>
    </main>
  );
}
