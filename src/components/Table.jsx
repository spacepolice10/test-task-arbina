import { Tag } from '@blueprintjs/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { filteredTableState } from '../redux/tableSlice';

export default function Table() {
  const filteredList = useSelector(filteredTableState);
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 5,
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {React.Children.toArray(
          filteredList.map((e) => {
            return (
              <>
                <Tag large minimal>
                  {e}
                </Tag>
              </>
            );
          })
        )}
      </section>
    </main>
  );
}
