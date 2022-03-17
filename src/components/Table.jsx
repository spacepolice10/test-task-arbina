import { Divider } from '@blueprintjs/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Table() {
  const list = useSelector((state) => state.table.value);
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
          list.map((e) => {
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
